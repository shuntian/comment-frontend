import React from 'react';
import PropTypes from 'prop-types';
import commentAPI from '../../api';
import { Card, Container, Paper, TextareaAutosize, Button } from '@material-ui/core';

const propTypes = {

};

class ArticleEdit extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      article: null,
      content: ''
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    console.log(this.props);
    commentAPI.getArticleContent(id).then(res => {
      const { article } = res.data;
      this.setState({
        isLoaded: true,
        article: article,
        content: article.content
      })
    })
  }

  onContentChanged = (event) => {
    const value = event.target.value;
    this.setState({
      content: value,
    });
  }

  submitEdit = () => {
    const { id } = this.props.params;
    const { content } = this.state;
    commentAPI.updateContent(id, content).then(res => {
      window.alert('更新成功');
    });
  }

  render() {

    const { isLoaded, article, content } = this.state;
    if (!isLoaded) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <Container>
          <Card>
            <Paper style={{marginBottom: '16px'}}>{article.title}</Paper>
            <TextareaAutosize 
              style={{width: '100%'}}
              value={content}
              onChange={this.onContentChanged}
            />
          <Button 
            style={{float: 'right', marginTop: '16px'}} 
            color="primary"
            onClick={this.submitEdit}
          >
              提交
            </Button>
          </Card>
        </Container>
      </div>
    );
  }
}

ArticleEdit.propTypes = propTypes;

export default ArticleEdit;
