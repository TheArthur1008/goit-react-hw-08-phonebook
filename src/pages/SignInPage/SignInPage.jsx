import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import { useUserLoginMutation } from 'redux/api/AuthApi';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';

import Image from '../../image/dark-macbook.png';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { isSuccess, isError }] = useUserLoginMutation();
  useEffect(() => {
    isError && toast.error('Invalid email or password');
  }, [isSuccess, isError]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    userLogin({
      email: email,
      password: password,
    });
    setEmail('');
    setPassword('');
  };

  let navigate = useNavigate();
  let location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundImage={`url(${Image})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      {isSuccess && <Navigate to="/contacts" replace={true} />}

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={'white'}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          as="form"
          rounded={'lg'}
          bg={useColorModeValue('grey', 'gray.700')}
          opacity={0.75}
          boxShadow={'lg'}
          p={8}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel color={'white'}>Email address</FormLabel>
              <Input
                type="email"
                pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                required
                onChange={handleInputChange}
                name="email"
                value={email}
                color={'white'}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Password</FormLabel>
              <Input
                type="password"
                onChange={handleInputChange}
                value={password}
                name="password"
                color={'white'}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                disabled={email && password ? false : true}
                type="submit"
                bg={'blue.700'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'center'}
              >
                <Button type="button" onClick={goBack}>
                  goBack
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginView;
