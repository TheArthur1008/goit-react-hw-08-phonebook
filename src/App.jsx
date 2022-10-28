import { lazy, Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import { getToken } from 'redux/AuthSlise';
import { useGetCurrentUserQuery } from 'redux/AuthApi';
import { useSelector } from 'react-redux';
import PrivateRoute from 'сomponents/PrivateRoure';
import PublicRoute from 'сomponents/PublicRoute';
const Layout = lazy(() => import('сomponents/Layout'));
const AuthNavPage = lazy(() => import('pages/AuthNavPage'));
const SignUpPage = lazy(() => import('pages/SingUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

function App() {
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
}

export default App;
