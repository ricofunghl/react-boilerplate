import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classes from './Login.module.css';
import useStyles from './LoginStyles';
import axios from 'axios';

const Login = () => {
    const styles = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameChangeHandler = evt => {
        setUsername(evt.target.value);
    }

    const passwordChangeHandler = evt => {
        setPassword(evt.target.value);
    }

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    let loginUrl = 'http://localhost:8000/rest-auth/login/'
    const loginInHandler = (evt) => {
        evt.preventDefault();
        const data = {
            username: username,
            password: password
        };
        axios.post(loginUrl, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
    }

    return (
        <React.Fragment>
            <Card className={styles.card}>
                <CardHeader title='Please Enter Credentials'/>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type='text'
                                label='Username'
                                name='username'
                                value={username}

                                onChange={usernameChangeHandler} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type='password'
                                name='password'
                                value={password}
                                label='Password'
                                autoComplete="current-password"
                                onChange={passwordChangeHandler} />
                        </Grid>
                      
                    </Grid>
                </CardContent>
                <CardActions className={styles.cardActions}>
                    <Button onClick={loginInHandler} disabled={!validateForm()} type='submit'>Login</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

export default Login;