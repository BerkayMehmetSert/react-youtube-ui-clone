import React from 'react';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Mic } from '../../../assets/icons/mic.svg';
import './center.css';
function Center() {
  return (
    <div className='navigation__center'>
      <div className='navigation__center_searchBar'>
        <form className='navigation__center-input'>
          <div className='input-container'>
            <div className='input-search'>
              <input type='text' placeholder='Search' />
            </div>
          </div>
        </form>
        <button type='button' className='navigation__center-button'>
          <div className='button-icon'>
            <Search fill='#fff' />
          </div>
        </button>
      </div>
      <div className='navigation__center_button'>
        <div className='center_button-container'>
          <div>
            <Mic fill='#fff' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
