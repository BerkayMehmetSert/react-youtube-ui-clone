import React from 'react';
import './start.css';
import { ReactComponent as Hamburger } from '../../../assets/icons/hamburger.svg';
import { ReactComponent as Logo } from '../../../assets/icons/Youtube-Logo.svg';
function Start() {
  
  return (
    <div className='navigation__start'>
      <div className='navigation__start-button'>
        <button
          className='start__button'
          type='button'
          
        >
          <Hamburger />
        </button>
      </div>
      <div className='navigation__start-logo'>
        <a href='/' className='start__logo'>
          <Logo fill='#fff' />
        </a>
      </div>
    </div>
  );
}

export default Start;
