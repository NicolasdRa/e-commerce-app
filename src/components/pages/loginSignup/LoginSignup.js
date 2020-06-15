import React from 'react'
import SignIn from '../../ui/signin/SignIn'
import SignUp from '../../ui/signup/SignUp'
import './LoginSignup.scss'

const LoginSignup = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default LoginSignup
