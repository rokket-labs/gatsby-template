import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import fetch from 'isomorphic-fetch'

// Change to env variable (for Netlify) or set your own API URI
const apiUri = 'https://api.spacex.land/graphql'

const httpLink = new HttpLink({
  uri: apiUri,
  fetch,
})

const withToken = setContext(async () => {
  // Implement your own token fetching logic.
  // This may be from local storage, Redux, Firebase, or Cognito instance.
  // If you have a token, return it as:
  // return { token }
  return null
})

// Sets the header for every GraphQL API call. If a JWT token is present, insert it.
const authLink = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext()
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
  return forward(operation)
})

const link = ApolloLink.from([withToken, authLink.concat(httpLink)])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
