import React from 'react'
import { Box, Text, WrapItem } from '@chakra-ui/react'

export type LaunchItem = {
  mission_name: string
}

type LaunchProps = {
  data: LaunchItem
}

const Launch: React.FC<LaunchProps> = ({ data }) => {
  return (
    <WrapItem>
      <Box borderWidth={1} borderRadius={8} minW={400}>
        <Text>{data.mission_name}</Text>
      </Box>
    </WrapItem>
  )
}

export default Launch
