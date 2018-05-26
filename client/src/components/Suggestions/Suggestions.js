import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

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
  }),
  chip: {
    margin: theme.spacing.unit / 2
  }
});

const Suggestions = props => {
  const { classes, words } = props;

  return (
    <Paper className={classes.paper} elevation={4}>
      {words.map((word, index) => {
        return <Chip key={index} label={word} className={classes.chip} />;
      })}
    </Paper>
  );
};

Suggestions.propTypes = {
  classes: PropTypes.object.isRequired,
  words: PropTypes.array.isRequired
};

export default withStyles(styles)(Suggestions);
