import React from 'react';
import './slider.css';
import Top from './Top/Top';
import Subscriptions from './Subscriptions/Subscriptions';
import From from './From/From';
import Footer from './Footer/Footer';
function Slider() {
  return (
    <div className='slider'>
      <Top />
      <Subscriptions />
      <From />
      <Footer />
      {/** Footer */}
    </div>
  );
}

export default Slider;
