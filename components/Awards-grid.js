import React from 'react';

const AwardsGrid = () => {
  return (
    <section className='grid gap-4 grid-cols-2 justify-center items-center my-5'>
      <a
        target={'_blank'}
        href='https://premiercorporateawards.com/'
        className='btn'
      >
        Corporate Awards
      </a>
      <a
        target={'_blank'}
        href='https://premiersportawards.com/'
        className='btn'
      >
        Sports Awards
      </a>
    </section>
  );
};

export default AwardsGrid;
