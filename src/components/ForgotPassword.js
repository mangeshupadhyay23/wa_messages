import React,{useState, useRef} from 'react'
import * as Mui from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {makeStyles} from '@material-ui/core/styles'
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";



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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));




export default function ForgotPassword() {
    const classes = useStyles();

    let emailRef = useRef()
    const [error, setError] = useState('')
    const [notification, setNotification] = useState('')
    const [loading, setLoading] = useState(false)
    const {resetPassword} = useAuth()
    const history = useHistory()

    const handleSubmit= async(e)=>{
        e.preventDefault();

        try{
            setError("")
            setLoading(true)
            await resetPassword(emailRef.value)
            setNotification("A password reset email has been sent. Redirecting to Login")
            setTimeout(()=>{history.push("/login")},3000)
        }catch(err){
            console.log(err)
            setError("Failed to log in")
        }

        setLoading(false)
        
    }

    return (
        <Mui.Container component="main" maxWidth="xs">
            <Mui.CssBaseline/>
            <div className={classes.paper}>
                <Mui.Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Mui.Avatar>
                <Mui.Typography component="h1" variant="h5">
                    Reset Password
                </Mui.Typography>
                {error && <Alert severity="error">{error}</Alert>}
                {notification && <Alert severity="info">{notification}</Alert>}
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Mui.TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth
                        inputRef={input=> emailRef=input}
                        id="email" 
                        type="email" 
                        label="Email Address" 
                        name="email" 
                        autoComplete="email" 
                        autoFocus
                    />

                    <Mui.Button type="submit" disabled={loading} fullWidth variant="contained" color="primary" className={classes.submit}>
                        Reset Password
                    </Mui.Button>
                    <Mui.Grid container>
                        <Mui.Grid item xs>
                            <Mui.Link href="/login" variant="body2">
                                Log in
                            </Mui.Link>
                        </Mui.Grid>
                    </Mui.Grid>
                </form>
            </div>
        </Mui.Container>
    )
}
