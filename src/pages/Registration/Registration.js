import {React, useRef} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import Logo from '../../assets/Logo/Logo'
import SignInBtn from '../../assets/Sign-in/SignInBtn'
import './registration.scss'

function Registration() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  let navigate = useNavigate();

  function Registration(e){
    e.preventDefault()
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);
      navigate('/home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode,errorMessage);
    });
  }

  
  return (
    <div className='registration'>
      <div className='registration__header'>
        <Logo />
        <SignInBtn />
      </div>
      <div className='registration__details'>
        <div className='details__container'>
          <div className='details--header'>
            <h3>STEP  <b>1</b> OF <b>3</b></h3>
            <h2>Create a password to start your membership</h2>
            <h3>
              Just a few more steps and you're done!
            </h3>
            <h3>
              We hate paperwork, too.
            </h3>
          </div>
          <div className='details--content'>
            <form>
              <div>
                <input 
                  ref={emailRef} 
                  placeholder=' ' 
                  type='email'  
                  minLength='5'
                  maxLength='50'
                  >
                  </input>
                <label>Email</label>
                
              </div>
              <div>
                  <input 
                    ref={passwordRef} 
                    placeholder=' ' 
                    type='password'
                    minLength='6'
                    maxLength='60'
                    ></input>
                    <label>
                      Add a password
                    </label>
                  
              </div>
              <span>
                <input 
                  placeholder=' ' 
                  type='checkbox'></input>
                <h3>Please do not email me Netflix special offers.</h3>
              </span>
            </form>
              <button onClick={Registration}>
                Sign Up
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration