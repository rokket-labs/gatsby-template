import React from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { RouteComponentProps } from '@reach/router'
import { Form, Formik, FormikHelpers } from 'formik'
import { navigate } from 'gatsby'
import { isNil } from 'ramda'

import { getLocalStorage, setLocalStorage } from 'src/helpers/localStorage'
import Layout from 'src/layouts'

type FormValues = {
  email: string
  password: string
}

const LoginScreen: React.FC<RouteComponentProps> = () => {
  // If user is already logged in, redirect to home page
  const user = getLocalStorage('user')
  if (!isNil(user)) navigate('/')

  const initialValues: FormValues = {
    email: '',
    password: '',
  }

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    // Set your login logic here, using setTimeout as a mock
    setTimeout(() => {
      console.log('Logged In')
      setLocalStorage('user', 'true')
      actions.setSubmitting(false)
      navigate('/')
    }, 1000)
  }

  return (
    <Layout>
      <Box
        textAlign="center"
        mx="25rem"
        minW="5rem"
        p="1rem"
        borderWidth={1}
        borderRadius={8}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <FormControl id="email" my="2rem" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" />
              </FormControl>
              <FormControl id="password" my="2rem" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <Button w="full" type="submit" isLoading={isSubmitting}>
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  )
}

export default LoginScreen
