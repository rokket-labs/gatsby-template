import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

import SEO from 'src/components/seo'
import Layout from 'src/layouts'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>NOT FOUND</Heading>
    <Text fontSize="lg">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Text>
  </Layout>
)

export default NotFoundPage
