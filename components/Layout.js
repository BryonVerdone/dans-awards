import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='m-auto max-w-5xl'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
