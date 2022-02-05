import React from 'react';
import PropTypes from 'prop-types';
import commentAPI from './api';

const propTypes = {

};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    commentAPI.listArticles().then(res => {
      const data = res.data;
      this.setState({content: data});
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>{this.state.content}</div>
    );
  }
}

App.propTypes = propTypes;

export default App;
