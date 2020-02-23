import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: 'auto',
        display: 'block',
        padding: 50,
    },
});

class Loading extends React.Component {

    render () {
        const {classes} = this.props
        
        return (
            <CircularProgress className={classes.progress} />
        )

    }

}
  
export default withStyles(styles)(Loading);
