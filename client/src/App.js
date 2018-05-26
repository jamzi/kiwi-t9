import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
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
  },
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

class App extends Component {
  state = {
    wordSuggestions: [],
    numberString: '',
    onlyRealWords: true
  };

  componentDidMount() {
  }

  callApi = async () => {
    if (this.state.numberString === '') {
      return;
    }

    const requestBody = {
      onlyRealWords: this.state.onlyRealWords,
      numbers: this.state.numberString
    };

    const response = await fetch('/suggestions', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const body = await response.json();

    this.setState({
      wordSuggestions: body
    })

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  keyPressed = (key) => {
    if (key === 'del') {
      this.setState((prevState) => {
        return { numberString: prevState.numberString.slice(0, -1), wordSuggestions: [] }
      });
      key = '';
    }

    this.setState((prevState) => {
      return { numberString: prevState.numberString + key };
    }, () => {
      this.callApi();
    });
  }

  toggleShowOnlyRealWords = () => {
    this.setState((prevState) => {
      return { onlyRealWords: !prevState.onlyRealWords }
    }, () => {
      this.callApi();
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Kiwi T9
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.paper} elevation={4}>
        { this.state.numberString }
      </Paper>
      <Paper className={classes.paper} elevation={4}>
        <div>
          <div className={classes.row}>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('1')}>
              <div className={classes.buttonNumber}>1</div><div className={classes.buttonText}></div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('2')}>
              <div className={classes.buttonNumber}>2</div><div className={classes.buttonText}>abc</div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('3')}>
              <div className={classes.buttonNumber}>3</div><div className={classes.buttonText}>def</div>
            </Button>
          </div>
          <div className={classes.row}>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('4')}>
              <div className={classes.buttonNumber}>4</div><div className={classes.buttonText}>ghi</div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('5')}>
              <div className={classes.buttonNumber}>5</div><div className={classes.buttonText}>jkl</div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('6')}>
              <div className={classes.buttonNumber}>6</div><div className={classes.buttonText}>mno</div>
            </Button>
          </div>
          <div className={classes.row}>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('7')}>
              <div className={classes.buttonNumber}>7</div><div className={classes.buttonText}>prqs</div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('8')}>
              <div className={classes.buttonNumber}>8</div><div className={classes.buttonText}>tuv</div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('9')}>
              <div className={classes.buttonNumber}>9</div><div className={classes.buttonText}>wxyz</div>
            </Button>
          </div>
          <div className={classes.row}>
            <Button variant="raised" className={classes.button}>
              <div className={classes.buttonNumber}>*</div><div className={classes.buttonText}></div>
            </Button>
            <Button variant="raised" className={classes.button} onClick={() => this.keyPressed('del')}>
              <div className={classes.buttonNumber}>0</div><div className={classes.buttonText}>del</div>
            </Button>
            <Button variant="raised" className={classes.button}>
              <div className={classes.buttonNumber}>#</div><div className={classes.buttonText}></div>
            </Button>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.onlyRealWords}
                onChange={this.toggleShowOnlyRealWords}
                value="onlyRealWords"
              />
            }
            label="Show only real words"
          />
        </div>
      </Paper>
      <Paper className={classes.paper} elevation={4}>
        {this.state.wordSuggestions.map((word, index) => {
          return (
            <Chip
              key={index}
              label={word}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
