import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/ui/header/Header'
import Home from './components/pages/home/Home'
import Shop from './components/pages/shop/Shop'
import Contact from './components/pages/contact/Contact'
import LoginSignup from './components/pages/loginSignup/LoginSignup'
import Checkout from './components/pages/checkout/Checkout'

import { setCurrentUser } from '../src/components/redux/user/userActions'
import './App.css'
import { selectCurrentUser } from './components/redux/user/userSelectors'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'

class App extends Component {
  //Setting Logged in User from firebase to state
  unsubscribeFromAuth = null

  componentDidMount () {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <LoginSignup />
            }
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
