import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from 'src/services/apollo'

type GenericContainerProps = {
  element: React.ReactNode
}

export const wrapRootElement: React.FC<GenericContainerProps> = ({
  element,
}) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
