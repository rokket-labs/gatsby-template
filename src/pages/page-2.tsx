import React from 'react'
import { Heading, Link, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'

import SEO from 'src/components/seo'
import Layout from 'src/layouts'

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading as="h1">Hi from the second page</Heading>
    <Text fontSize="lg">Welcome to page 2</Text>
    <Link as={GatsbyLink} to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
