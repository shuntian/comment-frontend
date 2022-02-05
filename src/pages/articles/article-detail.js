import React from 'react';
import PropTypes from 'prop-types';
import commentAPI from '../../api';
import { Button, Card, Container, Paper, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const propTypes = {

};

class ArticleDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      article: null,
      state: '',
    }
  }

  componentDidMount() {
    const { id } = this.props.params;
    commentAPI.getArticleContent(id).then(res => {
      const { article } = res.data;
      this.setState({
        isLoaded: true,
        article: article,
      });
    });
  }
  
  addComment = () => {
    const { id } = this.props.params;
    const { comment } = this.state; 
    commentAPI.addComment(id, comment).then(res => {
      this.setState({
        comment: '',
        article: res.data.article
      });
    });
  }

  onCommentChanged = (event) => {
    const value = event.target.value;
    this.setState({comment: value});
  }

  render() {
    const { isLoaded , article } = this.state;
    if (!isLoaded) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <Container maxWidth="md">
          <Card style={{marginTop: '20px', marginBottom: '20px', background: "#f0f0f0"}}>
            <h1>{article.title}</h1>
            <h5>{article.subTitle}</h5>
            <span>{article.author} at {article.create_at}</span>
            <p>{article.content}</p>
            <Link to={`/articles/${article._id}/edit`}>
                <Button style={{float: 'right'}} size="small">Edit</Button>
            </Link>
          </Card>
          <Paper>评论列表</Paper>
          {article && article.comments && (
            <Card>
              {article.comments.map((item, index) => {
                return <div key="index">{item}</div>
              })}
            </Card>
          )}
          <TextField 
            style={{marginTop: '16px'}} 
            value={this.state.comment}
            placeholder='请输入评论'
            fullWidth
            onChange={this.onCommentChanged}
          />
          <Button 
            style={{float: 'right', marginTop: '16px'}} 
            color="primary"
            onClick={this.addComment}
          >
            发表
          </Button>
        </Container>
      </div>
    );
  }
}

ArticleDetail.propTypes = propTypes;

export default ArticleDetail;
