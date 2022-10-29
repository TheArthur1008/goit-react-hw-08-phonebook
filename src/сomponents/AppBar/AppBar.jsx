import React from 'react';

import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const AppBar = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Navigation />
        <UserMenu />
      </Flex>
    </Box>
  );
};

export default AppBar;
