import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {

};

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Container>
          <Container maxWidth="fixed">
            <AppBar>
              <Toolbar variant="dense">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                  ShunTian
                </Typography>
                <div style={{marginLeft: "16px"}}>
                  <Link to="/articles" style={{color: 'white'}}>Articles</Link>
                </div>
                <div style={{display: 'flex', position: 'absolute', right: '24px'}}>
                  <div style={{marginLeft: "16px", cursor: 'pointer'}}>
                    <Link to="/login" style={{color: 'white'}}>Login</Link>
                  </div>
                  <div style={{marginLeft: "16px", cursor: 'pointer'}}>
                    <Link to="/Register" style={{color: 'white'}}>Register</Link>
                  </div>
                </div>
              </Toolbar>
            </AppBar>
          </Container>
          <Container maxWidth="fixed">
            <Grid container spacing={2}>
              <Grid item xs={8}>
              </Grid>
              <Grid item xs={4}>ee</Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
