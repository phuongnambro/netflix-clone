import {React, useRef, useState} from 'react'
import Logo from '../../assets/Logo/Logo'
import SignInBtn from '../../assets/Sign-in/SignInBtn';
import { FaAngleRight } from 'react-icons/fa';
import './introduction.scss'

function Introduction() {
  const [setEmail] = useState()

  const emailRef = useRef(null)

  function handleEmailInput(){
    let emailValue = emailRef.current.value
    setEmail(emailValue)
    return emailValue
  }
    
    
  

  return (
    <div className="introduction">
      <div className="header">
        <Logo />
        <SignInBtn />
      </div>
      <div className="sign-up-banner">
        <div className="sign-up-details">
          <h1 >
            Unlimited movies, TV 
            <br />
            shows, and more.
          </h1>
          <h2 >
            Watch anywhere. Cancel anytime.
          </h2>
          <h3>
            Ready to watch? Enter your email to create or restart your membership.
          </h3>
            <form>
          <div>
              <input 
                type="email" 
                placeholder=" "
                autoComplete="email" 
                maxLength="50" 
                minLength="5" 
                ref={emailRef}
                onChange={handleEmailInput}
              >
              </input>
              <label>Email address</label>
              <button type="submit">
                    <span>
                      Get Started
                    </span>
                    <FaAngleRight />
              </button>
          </div>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default Introduction