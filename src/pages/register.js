import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Center } from '../components/center';
import { Link } from 'react-router-dom';
import commentAPI from '../api';

const propTypes = {

};

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowPassword: false,
      name: '',
      nickname: '',
      email: '',
      password: '',
    }
  }


  handleChange = (type) => {
    return (event) => {
      const value = event.target.value;
      this.setState({[type]: value});
    }
  }

  handleClickShowPassword = () => {
    this.setState({isShowPassword: !this.state.isShowPassword});
  }

  handleMouseDownPassword = () => {

  }

  register = () => {
    const { name, nickname, email, password } = this.state;
    commentAPI.register(name, nickname, email, password).then(res => {
      const { code } = res.data;
      if (code === 0) {
        const navigate = this.props.navigate;
        navigate('/articles');
      }
    }).catch( err => {
      console.log(err);
    })
  }

  render() {
    const { isShowPassword, name, nickname, email, password } = this.state;
    return (
      <Center>
        <Card style={{background: "#f0f0f0", padding: "20px", minWidth: "500px"}}>
          <h3 style={{textAlign: 'center', marginBottom: '20px'}}>注册</h3>
          <form action="" method="">
            <div style={{marginBottom: '16px'}}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="standard-adornment-name">name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  value={name}
                  onChange={this.handleChange('name')}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />
              </FormControl>
            </div>
            <div style={{marginBottom: '16px'}}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="standard-adornment-nickname">nickname</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-nickname"
                  value={nickname}
                  onChange={this.handleChange('nickname')}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />
              </FormControl>
            </div>
            <div style={{marginBottom: '16px'}}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="standard-adornment-email">email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  value={email}
                  onChange={this.handleChange('email')}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth >
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="standard-adornment-password"
                  type={isShowPassword ? 'text' : 'password'}
                  value={password}
                  onChange={this.handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {isShowPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '16px'}}>
              <Button style={{marginRight: "30px"}} color="primary" onClick={this.register}>注册</Button>
            </div>
          </form>
        </Card>
      </Center>
    );
  }
}

Register.propTypes = propTypes;

export default Register;
