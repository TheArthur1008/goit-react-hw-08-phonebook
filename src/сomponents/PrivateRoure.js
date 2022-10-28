import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlise';

export default function PrivateRoute({ children }) {
  const isLoggedin = useSelector(getLoggedin);
  return isLoggedin ? children : <Navigate to="/" />;
}
