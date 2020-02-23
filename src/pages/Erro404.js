import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../index.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  holder: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: 50,
  },
  text: {
		margin: 30,
  },
  logo: {
      backgroundColor: '#666',
      padding: '10px',
	  marginBottom: 20,
	  width: 200,
  },
})


class Erro404 extends React.Component {
	render() {
		const { classes } = this.props;

		return(
			<div>
				<div className={classes.holder}>
					<Typography gutterBottom variant="h4" component="h1" className={classes.text}>
						Página não encontrada
					</Typography>
					<Link to="/">Voltar para Home</Link>
				</div>
			</div>
		)
	}
}

Erro404.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Erro404);