import React,{useState, useRef} from 'react'
import * as Mui from "@material-ui/core";
import { RemoveRedEye } from '@material-ui/icons';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {makeStyles} from '@material-ui/core/styles'
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "@material-ui/lab";



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




export default function Login() {
    const classes = useStyles();

    let emailRef = useRef()
    let passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {login} = useAuth()

    const handleSubmit= async(e)=>{
        e.preventDefault();

        try{
            setError("")
            setLoading(true)
            await login(emailRef.value, passwordRef.value)
        }catch(err){
            console.log(err)
            setError("Failed to create an account")
        }

        setLoading(false)
        
    }

    const [passwordIsMasked, setPasswordIsMasked] = useState(true)

    const togglePasswordMask=()=>{
      setPasswordIsMasked(!passwordIsMasked)
    }

    return (
        <Mui.Container component="main" maxWidth="xs">
            <Mui.CssBaseline/>
            <div className={classes.paper}>
                <Mui.Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Mui.Avatar>
                <Mui.Typography component="h1" variant="h5">
                    Log In
                </Mui.Typography>
                {error && <Alert severity="error">{error}</Alert>}
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

                    <Mui.TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth
                        inputRef={input=> passwordRef=input}
                        id="password" 
                        type={passwordIsMasked ? "password" : "text"}
                        label="Password" 
                        name="password" 
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                              <Mui.InputAdornment position="end">
                                <RemoveRedEye
                                  style={{cursor:"pointer"}}
                                  onClick={togglePasswordMask}
                                />
                              </Mui.InputAdornment>
                            ),
                        }}
                    />
                    <Mui.FormControlLabel 
                        control={<Mui.Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Mui.Button type="submit" disabled={loading} fullWidth variant="contained" color="primary" className={classes.submit}>
                        Log In
                    </Mui.Button>
                    <Mui.Grid container>
                        <Mui.Grid item xs>
                            <Mui.Link href="#" variant="body2">
                                Forgot Password
                            </Mui.Link>
                        </Mui.Grid>
                        <Mui.Grid item>
                            <Mui.Link href="/signup" variant="body2">
                                Need an account? Sign Up
                            </Mui.Link>
                        </Mui.Grid>
                    </Mui.Grid>
                </form>
            </div>
        </Mui.Container>
    )
}
