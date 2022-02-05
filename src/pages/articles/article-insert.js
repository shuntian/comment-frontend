import React from 'react';
import PropTypes from 'prop-types';
import commentAPI from '../../api';
import { Card, Container, Paper, TextareaAutosize, Button, Input, Grid } from '@material-ui/core';

const propTypes = {

};

class ArticleInsert extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subTitle: '',
      content: '',
      author: '',
    };
  }

  handleValueChanged = (name) => {
    return (event) => {
      const value = event.target.value;
      this.setState({[name]: value});
    }
  }

  submitArticle = () => {
    const { title, subTitle, content, } = this.state;
    const article = {
      title,
      subTitle,
      content,
      author: 'alex',
    }
    commentAPI.addArticle(article).then(res => {
      const navigate = this.props.navigate;
      navigate('/articles');
    });
  }

  render() {

    return (
      <div style={{marginTop: "50px"}}>
        <Container style={{maxWidth: "680px", marginBottom: "20px"}}>
          <h3 style={{textAlign: 'center'}}> 添加文章 </h3>
          <Grid container style={{marginBottom: "20px"}}>
            <Grid item xs={2}>
              <div>Title:</div>
            </Grid>
            <Grid item xs={10}>
              <Input 
                name="title" 
                value={this.state.title}
                onChange={this.handleValueChanged("title")}
              />
            </Grid>
          </Grid>
          <Grid container style={{marginBottom: "20px"}}>
            <Grid item xs={2}>
              <div>SubTitle:</div>
            </Grid>
            <Grid item xs={10}>
              <Input 
                name="subTitle" 
                value={this.state.subTitle}
                onChange={this.handleValueChanged("subTitle")}
              />
            </Grid>
          </Grid>
          <Grid container style={{marginBottom: "20px"}}>
            <Grid item xs={2}>
              <div>Content:</div>
            </Grid>
            <Grid item xs={10}>
              <TextareaAutosize 
                style={{width: "100%"}} 
                minRows={40} 
                name="content" 
                value={this.state.content}
                onChange={this.handleValueChanged("content")}
              >
              </TextareaAutosize>
            </Grid>
          </Grid>
          <Button 
            variant="contained" 
            color="primary" 
            style={{float: 'right', minWidth: "100px"}}
            onClick={this.submitArticle}
          >提交</Button>
        </Container>
      </div>
    );
  }
}

ArticleInsert.propTypes = propTypes;

export default ArticleInsert;
