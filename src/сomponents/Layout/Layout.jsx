import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slice/AuthSlise';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  const isLoggedin = useSelector(getLoggedin);
  return (
    <>
      {isLoggedin && <AppBar />}
      <Outlet />
    </>
  );
};

export default Layout;
