import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/ui/header/Header'
import Home from './components/pages/home/Home'
import Shop from './components/pages/shop/Shop'
import LoginSignup from './components/pages/loginSignup/LoginSignup'
import { setCurrentUser } from '../src/components/redux/user/userActions'
import './App.css'

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
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={LoginSignup} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
