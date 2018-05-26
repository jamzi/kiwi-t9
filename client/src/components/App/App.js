import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header/Header';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import Suggestions from '../Suggestions/Suggestions';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class App extends Component {
  state = {
    wordSuggestions: [],
    numberString: '',
    onlyRealWords: true
  };

  componentDidMount() {}

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
    });

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  keyPressed = key => {
    if (key === 'del') {
      this.setState(prevState => {
        return {
          numberString: prevState.numberString.slice(0, -1),
          wordSuggestions: []
        };
      });
      key = '';
    }

    this.setState(
      prevState => {
        return { numberString: prevState.numberString + key };
      },
      () => {
        this.callApi();
      }
    );
  };

  toggleShowOnlyRealWords = () => {
    this.setState(
      prevState => {
        return { onlyRealWords: !prevState.onlyRealWords };
      },
      () => {
        this.callApi();
      }
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Display numberString={this.state.numberString} />
        <Keypad
          onlyRealWords={this.state.onlyRealWords}
          handleKeyPress={this.keyPressed}
          handleShowOnlyRealWords={this.toggleShowOnlyRealWords}
        />
        <Suggestions words={this.state.wordSuggestions} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
