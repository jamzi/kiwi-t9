import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

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
  button: {
    margin: theme.spacing.unit / 2
  },
  buttonNumber: {
    fontSize: '24px',
    color: 'darkslategray'
  },
  buttonText: {
    color: 'dimgray',
    marginLeft: '5px'
  }
});

const Keypad = props => {
  const {
    classes,
    onlyRealWords,
    handleKeyPress,
    handleShowOnlyRealWords
  } = props;

  return (
    <Paper className={classes.paper} elevation={4}>
      <div>
        <div className={classes.row}>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('1')}
          >
            <div className={classes.buttonNumber}>1</div>
            <div className={classes.buttonText} />
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('2')}
          >
            <div className={classes.buttonNumber}>2</div>
            <div className={classes.buttonText}>abc</div>
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('3')}
          >
            <div className={classes.buttonNumber}>3</div>
            <div className={classes.buttonText}>def</div>
          </Button>
        </div>
        <div className={classes.row}>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('4')}
          >
            <div className={classes.buttonNumber}>4</div>
            <div className={classes.buttonText}>ghi</div>
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('5')}
          >
            <div className={classes.buttonNumber}>5</div>
            <div className={classes.buttonText}>jkl</div>
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('6')}
          >
            <div className={classes.buttonNumber}>6</div>
            <div className={classes.buttonText}>mno</div>
          </Button>
        </div>
        <div className={classes.row}>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('7')}
          >
            <div className={classes.buttonNumber}>7</div>
            <div className={classes.buttonText}>prqs</div>
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('8')}
          >
            <div className={classes.buttonNumber}>8</div>
            <div className={classes.buttonText}>tuv</div>
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('9')}
          >
            <div className={classes.buttonNumber}>9</div>
            <div className={classes.buttonText}>wxyz</div>
          </Button>
        </div>
        <div className={classes.row}>
          <Button variant="raised" className={classes.button}>
            <div className={classes.buttonNumber}>*</div>
            <div className={classes.buttonText} />
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={() => handleKeyPress('del')}
          >
            <div className={classes.buttonNumber}>0</div>
            <div className={classes.buttonText}>del</div>
          </Button>
          <Button variant="raised" className={classes.button}>
            <div className={classes.buttonNumber}>#</div>
            <div className={classes.buttonText} />
          </Button>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              checked={onlyRealWords}
              onChange={handleShowOnlyRealWords}
              value="onlyRealWords"
            />
          }
          label="Show only real words"
        />
      </div>
    </Paper>
  );
};

Keypad.propTypes = {
  classes: PropTypes.object.isRequired,
  onlyRealWords: PropTypes.bool.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleShowOnlyRealWords: PropTypes.func.isRequired
};

export default withStyles(styles)(Keypad);
