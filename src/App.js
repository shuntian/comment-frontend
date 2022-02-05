import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
          <div style={{width: "100%", height: "100%", position: 'absolute', top: '52px', margin: '20px'}}>
            <Outlet style={{with: "100%"}} />
          </div>
        </Container>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
