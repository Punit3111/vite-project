// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './NavBar';
// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayout;