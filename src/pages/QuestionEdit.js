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
import { Paper, Button, Box, TextField, FormControl, FormLabel, Checkbox, FormControlLabel } from '@material-ui/core';
import { createQuestion, updateQuestion, deleteQuestion, createAnswer, updateAnswer, deleteAnswer } from '../graphql/mutations';
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
    formControl: {
        border: '1px dotted #ccc',
        borderRadius: 30,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
    },
})



class QuestionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            isLoading: props.match.params.id ? true : false,
            isOpenDialog: false,
        }
    }

	componentDidMount() {
		if( this.state.id ) this.loadQuestion()
	}
	loadQuestion = async _ => {
		API.graphql(graphqlOperation(getQuestion, { id: this.state.id }))
			.then(questionData => {
                const question = questionData.data.getQuestion
                console.log(question)

                const answers = question.answers.items.reduce((acc, v, i) => {
                    acc['answer' + (i+1)  + 'Id'] = v.id
                    acc['answer' + (i+1)  + 'Name'] = v.answer
                    acc['answer' + (i+1)  + 'Correct'] = v.correct
                    return acc
                }, {})
                console.log('======= answer ==========')
                console.log(answers)
                


				this.setState({
                    questionName: question.question,
                    questionExplanation: question.explanation,
                    questionDocPage: question.docPage,
                    questionDocText: question.docText,
                    isLoading: false,
                    ...answers,
                })
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }

    handleChangeCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
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

        this.saveQuestion()
    }

    saveQuestion = _ => {
        const action = this.state.id ? updateQuestion : createQuestion

        const input = {
            id: this.state.id,
            question: this.state.questionName,
            explanation: this.state.questionExplanation,
            docPage: this.state.questionDocPage,
            docText:this.state.questionDocText,
            randomNumber: Math.floor(Math.random() * 100) + 1,
            questionRandomQuestionId: "All",
        }
        console.log(input)

		API.graphql(graphqlOperation(action, { input: input }))
			.then(questionData => {
                console.log(questionData)
                const id = questionData.data.createQuestion ? questionData.data.createQuestion.id : questionData.data.updateQuestion.id
				this.setState({
                    id: id,
                })
                this.saveAnswer()
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }

    saveAnswer = async _ => {
        const action = this.state.answer1Id ? updateAnswer : createAnswer

        const input = {
            id: this.state.answer1Id,
            answer: this.state.answer1Name,
            correct: this.state.answer1Correct ? true : false,
            answerQuestionId: this.state.id,
        }
        console.log(input)

		API.graphql(graphqlOperation(action, { input: input }))
			.then(questionData => {
                console.log(questionData)
                const answer1Id = questionData.data.createAnswer ? questionData.data.createAnswer.id : questionData.data.updateAnswer.id
				this.setState({
                    answer1Id: answer1Id,
                })
                this.saveAnswer2()
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }

    saveAnswer2 = async _ => {
        const action = this.state.answer2Id ? updateAnswer : createAnswer

        const input = {
            id: this.state.answer2Id,
            answer: this.state.answer2Name,
            correct: this.state.answer2Correct ? true : false,
            answerQuestionId: this.state.id,
        }
        console.log(input)

		API.graphql(graphqlOperation(action, { input: input }))
			.then(questionData => {
                console.log(questionData)
                const answer2Id = questionData.data.createAnswer ? questionData.data.createAnswer.id : questionData.data.updateAnswer.id
				this.setState({
                    answer2Id: answer2Id,
                })
                this.saveAnswer3()
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }

    saveAnswer3 = async _ => {
        const action = this.state.answer3Id ? updateAnswer : createAnswer

        const input = {
            id: this.state.answer3Id,
            answer: this.state.answer3Name,
            correct: this.state.answer3Correct ? true : false,
            answerQuestionId: this.state.id,
        }
        console.log(input)

		API.graphql(graphqlOperation(action, { input: input }))
			.then(questionData => {
                console.log(questionData)
                const answer3Id = questionData.data.createAnswer ? questionData.data.createAnswer.id : questionData.data.updateAnswer.id
				this.setState({
                    answer3Id: answer3Id,
                })
                this.saveAnswer4()
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
    }

    saveAnswer4 = async _ => {
        const action = this.state.answer4Id ? updateAnswer : createAnswer

        const input = {
            id: this.state.answer4Id,
            answer: this.state.answer4Name,
            correct: this.state.answer4Correct ? true : false,
            answerQuestionId: this.state.id,
        }
        console.log(input)

		API.graphql(graphqlOperation(action, { input: input }))
			.then(questionData => {
                console.log(questionData)
                const answer4Id = questionData.data.createAnswer ? questionData.data.createAnswer.id : questionData.data.updateAnswer.id
				this.setState({
                    answer4Id: answer4Id,
                    isSaving: false,
                    isLoading: false,
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
        // @ TODO: delete answers before question
		// API.graphql(graphqlOperation(deleteQuestion, { input: { id: this.state.id }}))
		// 	.then(questionData => {
		// 		this.props.history.push('/question/list')
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 		//alert('Sorry, error to load nw question. Try reload your page')
		// 	})
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
                                defaultValue={this.state.questionName}
                                onChange={this.handleChange}
                            />

                            <TextField required name="questionExplanation" label="Explanation" fullWidth className={classes.input}
                                defaultValue={this.state.questionExplanation}
                                onChange={this.handleChange}
                            />

                            <TextField required name="questionDocPage" label="DocPage" fullWidth className={classes.input}
                                defaultValue={this.state.questionDocPage}
                                onChange={this.handleChange}
                            />

                            <TextField required name="questionDocText" label="DocText" fullWidth className={classes.input}
                                multiline rowsMax="4"
                                defaultValue={this.state.questionDocText}
                                onChange={this.handleChange}
                            />

                            <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                                <FormLabel component="legend">Answer 1</FormLabel>

                                <TextField required name="answer1Name" label="Answer" fullWidth className={classes.input}
                                    defaultValue={this.state.answer1Name}
                                    onChange={this.handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="true" color="primary"
                                                name="answer1Correct"
                                                checked={this.state.answer1Correct ? true : false}
                                                onChange={this.handleChangeCheckbox('answer1Correct')} />}
                                    label="Correct Answer?"
                                />
                            </FormControl>

                            <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                                <FormLabel component="legend">Answer 2</FormLabel>

                                <TextField required name="answer2Name" label="Answer" fullWidth className={classes.input}
                                    defaultValue={this.state.answer2Name}
                                    onChange={this.handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="true" color="primary" onChange={this.handleChange}
                                                name="answer2Correct"
                                                checked={this.state.answer2Correct ? true : false}
                                                onChange={this.handleChangeCheckbox('answer2Correct')} />}
                                    label="Correct Answer?"
                                />
                            </FormControl>

                            <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                                <FormLabel component="legend">Answer 3</FormLabel>

                                <TextField required name="answer3Name" label="Answer" fullWidth className={classes.input}
                                    defaultValue={this.state.answer3Name}
                                    onChange={this.handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="true" color="primary" onChange={this.handleChange}
                                    name="answer3Correct"
                                    checked={this.state.answer3Correct ? true : false}
                                    onChange={this.handleChangeCheckbox('answer3Correct')} />}
                                    label="Correct Answer?"
                                />
                            </FormControl>

                            <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                                <FormLabel component="legend">Answer 4</FormLabel>

                                <TextField required name="answer4Name" label="Answer" fullWidth className={classes.input}
                                    defaultValue={this.state.answer4Name}
                                    onChange={this.handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="true" color="primary" onChange={this.handleChange}
                                    name="answer4Correct"
                                    checked={this.state.answer4Correct ? true : false}
                                    onChange={this.handleChangeCheckbox('answer4Correct')} />}
                                    label="Correct Answer?"
                                />
                            </FormControl>


                            {/* <Box m={1} className={classes.answers}>
                                Answer 1:
                                <TextField required name="answer1Name" label="Answer1" fullWidth className={classes.input}
                                    value={this.state.answer1Name}
                                    onChange={this.handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="true" />}
                                    label="Correct Answer?"
                                />
                            </Box> */}

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

