import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { Link as GatsbyLink, navigate } from 'gatsby'
import { isNil } from 'ramda'

import { clearLocalStorage, getLocalStorage } from 'src/helpers/localStorage'

export type HeaderProps = {
  siteTitle?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const user = getLocalStorage('user')

  const handleLogout = () => {
    clearLocalStorage('user')
    navigate('/login')
  }

  return (
    <Box
      as="header"
      bgGradient="linear(to-l, brandPrimary, brandSecondary)"
      mb="6">
      <Box m="0 auto" maxW="960" px="6" py="2">
        <Stack justify="space-between" align="center" flexDirection="row">
          <Heading as="h3" m="0">
            <Link as={GatsbyLink} to="/" color="white" textDecoration="none">
              {siteTitle}
            </Link>
          </Heading>
          <Box>
            {!isNil(user) && (
              <Button mx={5} onClick={handleLogout}>
                Logout
              </Button>
            )}
            <IconButton
              aria-label="Toggle color mode"
              size="lg"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Header
