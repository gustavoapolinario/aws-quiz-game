import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';
import API, { graphqlOperation } from '@aws-amplify/api';
import { listQuestions } from '../graphql/queries';
import Loading from '../components/Loading';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Paper } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
})



class QuestionList extends React.Component {
	state = {
	}
	componentDidMount() {
		this.loadQuestion()
	}
	loadQuestion = async token => {
		API.graphql(graphqlOperation(listQuestions, { nextTokenQuestion: token }))
			.then(questionData => {
                console.log(questionData.data.listQuestions.items)
				this.setState(state => ({
					nextToken: questionData.data.listQuestions.nextToken,
                    listQuestions: questionData.data.listQuestions.items,
                    prevToken: state.nextToken,
				}))
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
	}
	prevPage = _ => {
		this.loadQuestion(this.state.prevToken)
	}
	nextPage = _ => {
		this.loadQuestion(this.state.nextToken)
	}

	render() {
		const {classes} = this.props

		return (
			<Container component='main' className={classes.main}>
				<CssBaseline />
				<Navbar />

				{!this.state.listQuestions ?
					<Loading/>
                : 
                    <Paper style={{ padding: 10, marginBottom: 10, }}>
                        <Typography component="h1" variant="h3" gutterBottom>
                            List of Questions
                        </Typography>

                        {this.state.listQuestions.map(question => 
                            <Link key={question.id} component={RouterLink} to={'/question/edit/' + question.id} color='textPrimary' underline='none' className={classes.listItem}>
                                {question.question}
                            </Link>
                        )}
                    </Paper>
				}
                <Link component={RouterLink} to={'/question/edit/'}>
                    <Fab aria-label='New Question' className={classes.fab} color='primary'>
                        <AddIcon />
                    </Fab>
                </Link>
			</Container>
		);

	}
}

QuestionList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(QuestionList);

