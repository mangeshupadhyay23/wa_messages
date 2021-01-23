import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import * as Mui from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logout: {
      margin: theme.spacing(3, 0, 2),
    },
    form: {
        height:"50px",
        marginTop:"28px"
    },
    button:{
        marginTop:"10px"
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const [notification, setNotification] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const handleLogout = async () =>{
        try{
            setError("")
            await logout()
            history.push('/')
        }catch(err){
            console.log(err)
            setError("Failed to log out")
        }
    }

    const sendHandler = async(e)=>{
        e.preventDefault()
        await axios.post('https://fierce-everglades-53685.herokuapp.com/message', {
            message: message,
            to: phoneNo
          })
          .then(function (response) {
            setNotification("Message sent successfully")
            setTimeout(()=>{setNotification('')},2500)
          })
          .catch(function (error) {
            setError("Failed to send message")
            console.log(error);
            setTimeout(()=>{setError('')},2500)
        });

        setMessage('')
    }
    return (
        <>
            <Navbar logo={"WA messages"} page={"dashboard"} logout={handleLogout}/>
            <Mui.Container component="main" maxWidth="lg">
                <Mui.CssBaseline/>
                <div className={classes.paper}>
                    <Mui.Avatar className={classes.avatar}>
                            <AccountBoxRoundedIcon/>
                    </Mui.Avatar>
                    <Mui.Typography component="h1" variant="h5">
                        Profile
                    </Mui.Typography>
                    <Mui.Typography component="h1" variant="h6">
                        Email : {currentUser.email}
                    </Mui.Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                    {notification && <Alert severity="info">{notification}</Alert>}
                    <br/>
                    <Mui.Typography >
                        Please join the twilio sandbox by sending the join code "<strong>join comfortable-fur</strong>"
                        to whatsapp number <strong>+1 (415) 523-8886.</strong><br/><br/>
                        If you have whatsapp active in current device then <a href="//api.whatsapp.com/send?phone=14155238886&text=join comfortable-fur"  target="_blank" rel="noreferrer">click here</a> to automatically send the message to join sandbox.
                    </Mui.Typography>
                    <form className={classes.form} onSubmit={sendHandler}>
                        {/* <MuiPhoneNumber defaultCountry={'in'} inputRef={input=> phoneNoRef=input} fullWidth style={{marginBottom:"20px"}}/> */}
                        
                        <PhoneInput
                            country={'in'}
                            onChange={phone=> setPhoneNo(phone)}
                            fullWidth 
                            inputClass
                            placeholder="Recipient number"
                            required
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                        />
                        <Mui.Box color="text.secondary" style={{marginBottom:"20px", marginTop:"4px"}}>Please make sure that the Recipient number<br/> has been added to twilio sandbox using <br/>the steps given above</Mui.Box>

                        <Mui.TextField 
                            id="message" 
                            label="Your Message" 
                            variant="outlined" 
                            fullWidth
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}
                            required
                        />
                        <Mui.Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon/>}
                            autoFocus
                        >
                            Send
                        </Mui.Button>
                    </form>
                </div>
            </Mui.Container>
        </>
    )
}
