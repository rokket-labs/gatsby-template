import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { navigate } from 'gatsby'
import { isEmpty, isNil } from 'ramda'

import { getLocalStorage } from 'src/helpers/localStorage'

type PrivateRouteProps = {
  component: React.ComponentType<RouteComponentProps>
  path: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  component: Component,
}) => {
  const user = getLocalStorage('user')

  if (isEmpty(user) || isNil(user)) {
    navigate('/login')
    return null
  }

  return <Component>{children}</Component>
}

export default PrivateRoute
