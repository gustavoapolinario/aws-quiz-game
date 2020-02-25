import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';
import API, { graphqlOperation } from '@aws-amplify/api';
import { getQuestion } from '../graphql/queries';
import Loading from '../components/Loading';
import { Paper, Button, Box, TextField } from '@material-ui/core';
import { createQuestion, updateQuestion, deleteQuestion } from '../graphql/mutations';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';


const styles = theme => ({
	main: {
		paddingTop: theme.spacing(1),
    },
    listItem: {
        display: 'block',
        borderBottom: '1px dotted #ccc',
        padding: 10,
		'&:hover': {
			background: '#eee',
		},
		'&:last-child': {
			borderBottom: 0,
		},
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    input: {
        marginBottom: 20,
    },
})



class QuestionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            isLoading: props.match.params.id ? true : false,
            question: {},
            isOpenDialog: false,
        }
    }

	componentDidMount() {
		if( this.state.id ) this.loadQuestion()
	}
	loadQuestion = async _ => {
		API.graphql(graphqlOperation(getQuestion, { id: this.state.id }))
			.then(questionData => {
				this.setState({
                    question: questionData.data.getQuestion,
                    isLoading: false,
				})
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }
    
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            isSaving: true,
        })

        const action = this.state.id ? updateQuestion : createQuestion

        const input = {
            id: this.state.id,
            question: this.state.questionName,
            explanation: this.state.questionExplanation,
            docPage: this.state.questionDocPage,
            docText:this.state. questionDocText,
            randomNumber: Math.floor(Math.random() * 100) + 1,
        }
        console.log(input)

		API.graphql(graphqlOperation(action, { input: input }))
			.then(questionData => {
                console.log(questionData)
                const id = questionData.data.createQuestion ? questionData.data.createQuestion.id : questionData.data.updateQuestion.id
				this.setState({
                    id: id,
                    isLoading: false,
                    isSaving: false,
                })
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }
    
    deleteQuestion = _ => {
        this.setState({
            isOpenDialog: true,
        })
    }

    handleCloseDialog = _ => {
        this.setState({
            isOpenDialog: false,
        })
    }
    deleteQuestionConfirmed = _ => {
        this.setState({
            isLoading: true,
            isOpenDialog: false,
        })
		API.graphql(graphqlOperation(deleteQuestion, { input: { id: this.state.id }}))
			.then(questionData => {
				this.props.history.push('/question/list')
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }

	render() {
		const {classes} = this.props

		return (
			<Container component='main' className={classes.main}>
				<CssBaseline />
				<Navbar />

				{this.state.isLoading ?
					<Loading/>
                : 
                    <Paper style={{ padding: 10, marginBottom: 10, }}>
                        <form className={classes.form} action="post" onSubmit={this.handleSubmit}>

                            <Typography component="h1" variant="h3" gutterBottom>
                                Edit Question
                            </Typography>

                            <TextField required name="questionName" label="Question" fullWidth className={classes.input}
                                value={this.state.question.question}
                                onChange={this.handleChange}
                            />

                            <TextField required name="questionExplanation" label="Explanation" fullWidth className={classes.input}
                                value={this.state.question.explanation}
                                onChange={this.handleChange}
                            />

                            <TextField required name="questionDocPage" label="DocPage" fullWidth className={classes.input}
                                value={this.state.question.docPage}
                                onChange={this.handleChange}
                            />

                            <TextField required name="questionDocText" label="DocText" fullWidth className={classes.input}
                                multiline rowsMax="4"
                                value={this.state.question.docText}
                                onChange={this.handleChange}
                            />

                            <Box display="flex">
                                {this.state.isSaving ?
                                    <Loading/>
                                : <>
                                    <Box flexGrow={1}>
                                        <Button variant="contained" component={RouterLink} to="/question/list">
                                            Back
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button variant="contained" onClick={this.deleteQuestion} style={{ marginRight: 10, }} >
                                            Delete
                                        </Button>
                                    </Box>
                                    <Button type="submit" variant="contained" color="primary" >
                                        Save
                                    </Button>
                                </>}
                            </Box>
                        </form>
                    </Paper>
				}

                <Dialog
                  open={this.state.isOpenDialog}
                  onClose={this.handleCloseDialog}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete question</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        You really want to delete this question?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} variant="contained" color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.deleteQuestionConfirmed} variant="contained" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
			</Container>
		);

	}
}

QuestionEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(QuestionEdit))

