import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    minHeight: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  })
});

const Display = props => {
  const { classes, numberString } = props;

  return (
    <Paper className={classes.paper} elevation={4}>
      {numberString}
    </Paper>
  );
};

Display.propTypes = {
  classes: PropTypes.object.isRequired,
  numberString: PropTypes.string.isRequired
};

export default withStyles(styles)(Display);
