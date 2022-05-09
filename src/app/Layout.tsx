import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleThemeMode } from './redux/theme/actions';

interface Props {}

const Layout: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <div>
      <button onClick={handleClick}>Hoi</button>
      <Outlet />
    </div>
  );
};

export default Layout;
