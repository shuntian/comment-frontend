import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, Container, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import commentAPI from '../../api';

const propTypes = {

};

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search_text: '',
    }
  }

  componentDidMount() {
    this.listArticles();
  }

  listArticles = (search) => {
    commentAPI.listArticles(search).then(res => {
      console.log('add')
      const { articles } = res.data;
      this.setState({articles: articles});
    })
  }

  onSearchValueChanged = (event) => {
    const value = event.target.value;
    this.setState({search_text: value})
  }

  onSearchArticles = () => {
    const { search_text } = this.state;
    this.listArticles(search_text);
  }

  render() {
    const { articles, search_text } = this.state;
    return (
      <div>
        <Container maxWidth="md">
          <Card style={{padding: '20px'}}>
            <Grid container>
              <Grid item xs={6}>
                <TextField placeholder='搜索标题或内容' value={search_text}  onChange={this.onSearchValueChanged}/>
              </Grid>
              <Grid item xs={6}>
                <Button color="primary" style={{marginRight: "16px"}} variant="contained" onClick={this.onSearchArticles}>Search!!!</Button>
                <Link to="/articles/insert">
                  <Button color="primary" variant="contained">Create Article</Button>
                </Link>
              </Grid>
            </Grid>
          </Card>
          <div style={{marginTop: '20px'}}>
            {articles.length > 0 && (
              articles.map(article => {
                return (
                  <Card style={{padding: '16px'}} key={article._id}>
                    <p>{article.title}</p>
                    <span>{article.subTitle}</span>
                    <CardActions>
                      <Link to={`/articles/${article._id}`}>
                        <Button size="small">Learn More</Button>
                      </Link>
                    </CardActions>
                  </Card>
                );
              })
            )}
          </div>
        </Container>
      </div>
    );
  }
}

Articles.propTypes = propTypes;

export default Articles;
