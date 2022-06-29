import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header/header.component'

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import { selectCurrentUser } from './redux/user/user.selectors'

import { checkUserSession } from './redux/user/user.action'

import './App.css'

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

export default App
