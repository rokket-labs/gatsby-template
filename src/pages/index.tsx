import React from 'react'
import { Router } from '@reach/router'

import PrivateRoute from 'src/components/privateRoute'
import HomeScreen from 'src/screens/home'
import LoginScreen from 'src/screens/login'

const IndexPage: React.FC = () => (
  <Router>
    <LoginScreen path="login" />
    <PrivateRoute component={HomeScreen} path="/" />
  </Router>
)

export default IndexPage
