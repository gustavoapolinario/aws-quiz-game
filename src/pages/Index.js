import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
	main: {
		paddingTop: theme.spacing(1),
	},
})



class Index extends React.Component {

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
                                AWS Quiz Game
                            </Typography>
                        </Box>
                        <Divider className={classes.divider} />

                        <Box m={3}>
                            <Typography gutterBottom>
                                This project was created to improve AWS knowleadge playing a Quiz game.<br/>
                                All questions in this game will be created with AWS documentation.
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
                            <Button variant="contained" color="primary" component={RouterLink} to="/question">Play</Button>
                        </Box>
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

