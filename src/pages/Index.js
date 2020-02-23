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



class Index extends React.Component {
	state = {
		answer: '',
		answered: false,
		curQuestion: {
			id: 1,
			title: 'Quem é o mais rápido do universo?',
			multipleChoice: false,
			rightAnswer: "3",
			answers: [
				{
					id: "2",
					title: "Flash é o mais rápido do mundo, não tem como discutir, afinal isso sempre é comentado, do corredor mais rápido do mundo",
				},
				{
					id: "3",
					title: "SuperMan",
				},
				{
					id: "4",
					title: "Goku",
				}
			],
			explaination: 'The doc say that. Believe'
		},
	}

	handleChange = event => {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}
	getAnswer = _ => {
		if( this.state.answer !== '' ) {
			this.setState({
				rightAnswer: this.state.curQuestion.rightAnswer === this.state.answer,
				answered: true,
			})
		}
	}

	render() {
		const {classes} = this.props

		return (
			<Container component='main' className={classes.main}>
				<CssBaseline />
				<Navbar />
				<Card className={classes.root}>
					<CardContent>
						<Box textAlign="center">
							<Typography component="h1" variant="h4" gutterBottom>
								{this.state.curQuestion.title}
							</Typography>
						</Box>
						<Divider className={classes.divider} />

						<RadioGroup defaultValue={this.state.answer} aria-label="answer" name="answer" value={this.state.answer} onChange={this.handleChange}>
							{this.state.curQuestion.answers.map(v =>
								<FormControlLabel className={classes.answerOption} key={v.id} value={v.id} control={<Radio color="primary" />} label={v.title} />
							)}
						</RadioGroup>
					
						{this.state.answered ?
							<>
								<Alert severity={this.state.rightAnswer ? 'error' : 'success' }>
									<AlertTitle>{this.state.rightAnswer ? 'Wrong Answer' : 'Correct' }</AlertTitle>
									{this.state.curQuestion.explaination}
								</Alert>

								<Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
									<Box flexGrow={1}>
										<Button variant="contained" color="secondary" onClick={this.getAnswer}>Stop</Button>
									</Box>
									<Button variant="contained" color="primary" onClick={this.getAnswer}>Next Question</Button>
								</Box>
							</>
						:
							<Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
								<Button variant="contained" color="primary" onClick={this.getAnswer}>Continue</Button>
							</Box>
						}
					</CardContent>
				</Card>
			</Container>
		);

	}
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Index);

