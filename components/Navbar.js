import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <Link href={'/'}>
      <h1 className='my-3 text-3xl font-bold underline text-center'>
        Dan's Awards & Engraving
      </h1>
    </Link>
  );
};

export default Navbar;
