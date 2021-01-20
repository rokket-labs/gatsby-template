import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Box, Heading, Spinner, Text, Wrap } from '@chakra-ui/react'

import Launch, { LaunchItem } from 'src/components/launch'
import Loading from 'src/components/loading'
import Layout from 'src/layouts'

import LAUNCHES_PAST from './launchesPast.gql'

type LaunchData = {
  launchesPast: LaunchItem[]
}

const HomeScreen: React.FC = () => {
  const { data, loading } = useQuery<LaunchData>(LAUNCHES_PAST)

  useEffect(() => {
    console.log(data)
  }, [data])

  const renderRocketLaunch = () => {
    return data?.launchesPast.map(launch => (
      <Launch key={launch.mission_name} data={launch} />
    ))
  }

  return (
    <Layout>
      <Box px="2rem">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Heading as="h2">Rocket Launches</Heading>
            <Wrap>{renderRocketLaunch()}</Wrap>
          </>
        )}
      </Box>
    </Layout>
  )
}

export default HomeScreen
