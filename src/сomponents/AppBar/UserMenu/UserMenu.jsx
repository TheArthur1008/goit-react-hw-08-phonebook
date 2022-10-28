import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/AuthSlise';
import { useUserLogoutMutation } from 'redux/AuthApi';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

function UserMenu() {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <Box>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="20px" color="darkgreen" as="u" mr={10}>
          Hello! {name}
        </Text>
        <Button
          type="button"
          onClick={() => {
            userLogout();
          }}
        >
          LogOut
        </Button>
      </Flex>
    </Box>
  );
}

export default UserMenu;
