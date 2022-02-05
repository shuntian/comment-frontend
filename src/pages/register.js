import React from 'react';
import PropTypes from 'prop-types';
import { Card, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Center } from '../components/center';
import { Link } from 'react-router-dom';

const propTypes = {

};

class Register extends React.Component {


  handleChange = () => {

  }

  handleClickShowPassword = () => {

  }

  handleMouseDownPassword = () => {

  }

  render() {
    const values = {};
    return (
      <Center>
        <Card style={{background: "#f0f0f0", padding: "20px", minWidth: "500px"}}>
          <h3 style={{textAlign: 'center', marginBottom: '20px'}}>注册</h3>
          <form action="" method="">
            <div style={{marginBottom: '16px'}}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="standard-adornment-name">name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  value={values.weight}
                  onChange={this.handleChange}
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
                  value={values.weight}
                  onChange={this.handleChange}
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
                  value={values.weight}
                  onChange={this.handleChange}
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
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={this.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '16px'}}>
              <Input style={{marginRight: "30px"}} color="primary" type="submit" value="注册"></Input>
            </div>
          </form>
        </Card>
      </Center>
    );
  }
}

Register.propTypes = propTypes;

export default Register;
