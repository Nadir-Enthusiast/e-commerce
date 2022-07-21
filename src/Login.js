import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { db, auth, analytics } from "./firebase"
import {doc, setDoc} from "firebase/firestore"
/* import { TextInput } from "react-native"; */
import "./Login.css"
import { useStateValue } from "./StateProvider";

function Login() {
  const history = useNavigate();
  const [user, dispatch] = useStateValue();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault()

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                history("/")
            }
        })
        .catch(error => alert(error.message))
  }

  const createAccount = e => {
    e.preventDefault()

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                setDoc(doc(db, 'users', email), {
                    username: username,
                    email: email,
                    password: password
                })
                history("/")
            }
        })
        .catch(error => alert(error.message))


  }
  return (
    <div className='login'>
        <Link to="/">
            <img
                className='login-logo'
                src='https://previews.123rf.com/images/maclife/maclife1701/maclife170100008/70448471-dragon-logo-vector-icon-design.jpg'
                alt=''
            />
        </Link>

        <div className="login-container">
            <h1>Log in</h1>
            
            <form>
                <h5>Username</h5>
                <input
                    placeholder='Your username'
                    type="text"
                    value={username}
                    onChange={ e => setUsername(e.target.value)} 
                    required/>

                <h5>E-mail</h5>
                <input
                    placeholder='example@gmail.com'
                    type="text"
                    value={email}
                    onChange={ e => setEmail(e.target.value)} 
                    required/>

                <h5>Password</h5>
                <input
                    placeholder='Pick a strong password'
                    type="password"
                    value={password} 
                    onChange={ e => setPassword(e.target.value)}
                    required />
            </form>

            <button 
                type='submit'
                className='login-signInButton'
                onClick={signIn} >
                Sign in
            </button>

            <p>
                By signing in , you agree to our Terms&Conditions,
                Privacy Policy and User Agreement. Read before you
                sign in.
            </p>

            <button
                className='login-createAccount'
                onClick={createAccount} >
                Create new Account
            </button>
        </div>
    </div>
  )
}

export default Login