import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getToken } from 'redux/slice/AuthSlise';
import { useGetCurrentUserQuery } from 'redux/api/AuthApi';

import PublicRoute from 'сomponents/Routes/PublicRoute';
import PrivateRoute from 'сomponents/Routes/PrivateRoute';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = lazy(() => import('сomponents/Layout/Layout'));
const AuthNavPage = lazy(() => import('pages/AuthNavPage/AuthNavPage'));
const SignUpPage = lazy(() => import('pages/SingUpPage/SingUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const App = () => {
  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, { skip: !token });

  return (
    <Box>
      <Suspense>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute restricted>
                    <AuthNavPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <SignInPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
          <ToastContainer
            autoClose={2000}
            position="top-right"
            hideProgressBar={true}
          />
        </ChakraProvider>
      </Suspense>
    </Box>
  );
};

export default App;
