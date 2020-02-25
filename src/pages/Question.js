import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import API, { graphqlOperation } from '@aws-amplify/api';
import { nextQuestions } from '../graphql-custom/queries';
import Loading from '../components/Loading';

const styles = theme => ({
	main: {
		paddingTop: theme.spacing(1),
	},
	divider: {
		marginBottom: 30,
	},
	actions: {
		textAlign: 'right',
	},
	answerOption: {
		borderBottom: '1px dotted #ccc',
		margin: 10,
		padding: 10,
		paddingLeft: 0,
		'&:last-child': {
			borderBottom: 0,
		},
		'&:hover': {
			backgroundColor: '#eee',
		},
	},
})



class Question extends React.Component {
	state = {
		answer: '',
		isAnswered: false,
	}
	componentDidMount() {
		this.loadQuestion()
	}
	loadQuestion = async _ => {
		let nextQuestion = this.state.nextQuestion || localStorage.getItem("nextQuestion")
		API.graphql(graphqlOperation(nextQuestions, { nextTokenQuestion: nextQuestion }))
			.then(questionData => {
				console.log('===================================')
				let listRandomQuestions = questionData.data.listRandomQuestions.items[0]
				console.log(listRandomQuestions)
				let question = listRandomQuestions.questions.items[0]

				if( !question ) return this.restartQuestion()

				console.log(question)
				let rightAnswer = question.answers.items.filter(v => v.correct )
				this.setState({
					nextQuestion: listRandomQuestions.questions.nextToken,
					curQuestion: question,
					rightAnswer: rightAnswer.reduce((acc, v) => acc + ',' + v.id, '').substr(1),
					mutipleChoice: rightAnswer.length > 1,
				})
				localStorage.setItem("nextQuestion", listRandomQuestions.questions.nextToken)
			})
			.catch(err => {
				console.log(err)
				//alert('Sorry, error to load nw question. Try reload your page')
			})
	}
	restartQuestion = _ => {
		this.setState({
			nextQuestion: null,
		})
		localStorage.removeItem("nextQuestion")
		this.loadQuestion()
	}
	stopQuiz = _ => {
		alert('close the window')
	}
	nextQuestion = _ => {
		this.setState({
			curQuestion: null,
			rightAnswer: null,
			answer: '',
			isAnswered: false,
		})
		this.loadQuestion()
	}

	handleChange = event => {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}
	getAnswer = _ => {
		if( this.state.answer !== '' ) {
			console.log(this.state.curQuestion.answers.items)
			console.log(this.state.rightAnswer)
			console.log(this.state.mutipleChoice)
			console.log(this.state.rightAnswer === this.state.answer)
			this.setState({
				isCorrectAnswer: this.state.rightAnswer === this.state.answer,
				isAnswered: true,
			})
		}
	}

	render() {
		const {classes} = this.props

		return (
			<Container component='main' className={classes.main}>
				<CssBaseline />
				<Navbar />

				{!this.state.curQuestion ?
					<Loading/>
				: 
					<Card className={classes.root}>
						<CardContent>
							<Box textAlign="center">
								<Typography component="h1" variant="h4" gutterBottom>
									{this.state.curQuestion.question}
								</Typography>
							</Box>
							<Divider className={classes.divider} />

							<RadioGroup aria-label="answer" name="answer" value={this.state.answer} onChange={this.handleChange}>
								{this.state.curQuestion.answers.items.map(v =>
									<FormControlLabel className={classes.answerOption} control={<Radio color="primary" />}
										key={v.id} value={v.id} label={v.answer} disabled={this.state.isAnswered} />
								)}
							</RadioGroup>
						
							{this.state.isAnswered ?
								<>
									<Alert severity={this.state.isCorrectAnswer ? 'success' : 'error' }>
										<AlertTitle>{this.state.isCorrectAnswer ? 'Correct' : 'Wrong Answer' }</AlertTitle>
										{this.state.curQuestion.explaination}
									</Alert>

									<Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
										<Box flexGrow={1}>
											<Button variant="contained" color="secondary" onClick={this.stopQuiz}>Stop</Button>
										</Box>
										<Button variant="contained" color="primary" onClick={this.nextQuestion}>Next Question</Button>
									</Box>
								</>
							:
								<Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
									<Button variant="contained" color="primary" onClick={this.getAnswer}>Continue</Button>
								</Box>
							}
						</CardContent>
					</Card>
				}
			</Container>
		);

	}
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Question);

