import React from 'react'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Route exact path='/' component={Profile} />
      </>
    </Router>
  )
}
