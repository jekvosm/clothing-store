import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action'

import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from './sign-in.styles'

const SignIn = () => {
  const [userCredentionals, setCredentionals] = useState({
    email: '',
    password: '',
  })
  const { email, password } = userCredentionals

  const dispatch = useDispatch()

  const handleSubmit = async event => {
    event.preventDefault()

    dispatch(emailSignInStart(email, password))
  }

  const handleChange = event => {
    const { value, name } = event.target

    setCredentionals({ ...userCredentionals, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
