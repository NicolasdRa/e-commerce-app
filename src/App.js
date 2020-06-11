import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/ui/header/Header'
import Home from './components/pages/home/Home'
import Shop from './components/pages/shop/Shop'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App
