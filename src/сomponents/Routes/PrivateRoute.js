import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slice/AuthSlise';

const PrivateRoute = ({ children }) => {
  const isLoggedin = useSelector(getLoggedin);
  return isLoggedin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
