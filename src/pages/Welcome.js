import React from 'react'
import { Route } from 'react-router-dom'

const Welcome = (props) => {
  return (
    <section>
    <h1>The Welcome Page</h1>
    <Route path="/welcome/new-user">
      <p>welcome</p>
    </Route>
    </section>
  )
}

export default Welcome