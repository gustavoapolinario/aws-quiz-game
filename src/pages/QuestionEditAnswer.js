import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { TextField, FormControl, FormLabel, Checkbox, FormControlLabel } from '@material-ui/core';


const styles = theme => ({
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



class QuestionEditAnswer extends React.Component {

	render() {
        const {classes} = this.props

		return (
            <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                <FormLabel component="legend">Answer {this.props.index+1}</FormLabel>

                <TextField required name="answer1Name" label="Answer" fullWidth className={classes.input}
                    defaultValue={this.props.answer.answer}
                    onChange={this.props.handleChangeAnswerName(this.props.index)}
                />
                <FormControlLabel
                    control={<Checkbox value="true" color="primary"
                                name="answer1Correct"
                                checked={this.props.answer.correct ? true : false}
                                onChange={this.props.handleChangeCheckboxAnswer(this.props.index)} />}
                    label="Correct Answer?"
                />
            </FormControl>
		);

	}
}

QuestionEditAnswer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(QuestionEditAnswer)

