import React, { useContext, useState, useEffect} from 'react';
import { auth, googleProvider } from "../firebase";


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email,password) =>{
        return auth.createUserWithEmailAndPassword(email,password);
    }

    const login = (email,password) =>{
        return auth.signInWithEmailAndPassword(email,password);
    }

    const logout = () =>{
        return auth.signOut();
    }

    const resetPassword = (email) =>{
        return auth.sendPasswordResetEmail(email)
    }

    const signInViaGoogle =()=>{
        console.log(googleProvider)
        return auth.signInWithPopup(googleProvider);
    }


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false)
        })

        // window.gapi.load('auth2',()=>{
        //     window.gapi.auth2.init({
        //         client_id:'475064412912-urgib4o1svrkhq2qf23g9qs0i31je7b0.apps.googleusercontent.com'
        //     })
        // })

        // window.gapi.load('signin2',()=>{
        //     const params = {
        //         scope: 'email',
        //         width: 200,
        //         height: 50,
        //         longtitle: true,
        //         theme: 'dark',
        //         onsuccess: (user)=>{
        //             setCurrentUser(user) 
        //             history.push('/dashboard')
        //         },
        //         onfailure: (err)=>{console.log(err)}
        //       }
        //     window.gapi.signin2.render('loginButton',params)
        // })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        signInViaGoogle
    }

    const googleSignInButton=(<div></div>)

    return (
        <AuthContext.Provider value={value} googleSignIn={googleSignInButton}>
            {!loading && children}
            {/* {window.location.pathname==="/signup" && <button id="loginButton">Sign In With Google</button>}
            {window.location.pathname==="/login" && <button id="loginButton">Sign In With Google</button>} */}
        </AuthContext.Provider>
    )
}
