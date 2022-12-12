import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image
          width={300}
          height={500}
          src='/assets/award-1.jpg'
          className=' max-w-full  rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>CALL NOW TO PLACE AN ORDER!</h1>
          <p className='py-6'>
            Dan's Awards & Engraving is a full line awards retailer offering a
            wide array of recognition awards at competitive prices. The product
            line includes, but is not limited to, plaques, trophies, acrylic and
            glass awards, ribbons, certificates, cast bronze plaques, medals,
            engraved picture frames, desk accessories and giftware.
          </p>
          <Link href='/Contact'>
            <button className='btn btn-primary'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
