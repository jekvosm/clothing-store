import React from 'react'
import {
  auth,
  signInFromAuth,
  signInWithGoogle,
} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state

    try {
      await signInFromAuth(auth, email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.error(error.message)
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            // placeholder='email@mail.com'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            // placeholder='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
