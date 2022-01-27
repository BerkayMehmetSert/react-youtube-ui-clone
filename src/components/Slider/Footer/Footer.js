import React from 'react';
import './footer.css';
function Footer() {
  const primaryData = [
    {
      id: '1',
      title: 'About',
    },
    {
      id: '2',
      title: 'Press',
    },
    {
      id: '3',
      title: 'Copyright',
    },
    {
      id: '4',
      title: 'Contact us',
    },
    {
      id: '5',
      title: 'Creators',
    },
    {
      id: '6',
      title: 'Advertise',
    },
    {
      id: '7',
      title: 'Developers',
    },
  ];
  const secondaryData = [
    {
      id: '1',
      title: 'Terms',
    },
    {
      id: '2',
      title: 'Privacy',
    },
    {
      id: '3',
      title: 'Policy & Safety',
    },
    {
      id: '4',
      title: 'How YouTube works',
    },
    {
      id: '5',
      title: 'Test new features',
    },
  ];
  return (
    <div className='slider__footer'>
      <div className='slider__footer-primary'>
        {primaryData.map(primary => {
          return (
            <div className='primary-title' key={primary.id}>
              {primary.title}
            </div>
          );
        })}
      </div>
      <div className='slider__footer-secondary'>
        {secondaryData.map(secondary => {
          return (
            <div className='primary-title' key={secondary.id}>
              {secondary.title}
            </div>
          );
        })}
      </div>
      <div className='slider__footer-copyright'>© 2022 Google LLC</div>
    </div>
  );
}

export default Footer;
