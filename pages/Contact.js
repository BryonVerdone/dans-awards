import React from 'react';

const Contact = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Contact</h1>
          {/* <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <ul className='my-5 flex flex-col gap-2'>
            <li>Phone 860-450-1764 </li>
            <li>Fax 860-450-1769</li>
            <li>dansawards@att.net</li>
          </ul>
          {/* <button className='btn btn-primary'>Get Started</button> */}
          {/* <a
            className='link-hover'
            target='_blank'
            href="https://www.google.com/maps/place/Dan's+Awards+%26+Engraving/@41.7148402,-72.226603,17z/data=!3m1!4b1!4m5!3m4!1s0x89e663ecd2b1a4e3:0x5c35352054cf0e81!8m2!3d41.7148415!4d-72.2244398"
          >
            39 Mansfield Avenue Willimantic, CT
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
