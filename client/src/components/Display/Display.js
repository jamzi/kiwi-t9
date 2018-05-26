import React from 'react';
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

export default withStyles(styles)(Display);
