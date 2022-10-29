import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slice/AuthSlise';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedin = useSelector(getLoggedin);
  const shouldRedirect = isLoggedin && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
