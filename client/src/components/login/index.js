import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { useHistory } from 'react-router';
import {LoginData}  from '../../authData/index'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)
  const [errorMsg,setErrorMsg] =useState("")

    const usernameChange = (e) => {
        setUsername(e.target.value)
    }
    const passwordChange = (e) => {
        debugger
        setPassword(e.target.value)
    }


    const signin = () => {
        if(!username && !password){
            setErrorMsg("Username and Password should not blank")
            return
        }
        if(!username ){
            setErrorMsg("Username  should not blank")
            return
        }
        if(!password){
            setErrorMsg("Password should not blank")
            return
        }
        let checkUserExit = LoginData.find(data =>
            data.userName === username && data.password === password
        )
        if (checkUserExit) {
            localStorage.setItem("loginUser", username)
            history.push('/home')
            
        }
       
        else
        {
            setErrorMsg("Credential are not correct , Please try Again !")
            setUsername("")
            setPassword("")
        }
    }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
            <div style={{color:'red',height:'20px'}}>{errorMsg}</div>
          <TextField
            value={username}
            onChange={usernameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            value={password}
            onChange={passwordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signin}
          >
            Sign In
          </Button>
          
        </form>
      </div>
    </Container>
  );
}