import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Hats from './components/pages/hats/Hats'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    </div>
  )
}

export default App
