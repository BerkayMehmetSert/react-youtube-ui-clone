import React, { useState, useEffect } from 'react';
import './topbar.css';
import data from './data.js';
function Topbar() {
  const [people, setPeople] = useState(data);
  return (
    <div className='topbar'>
      <div className='topbar__container'>
        <div className='topbar__container__scroll'>
          {people.map(person => {
            const { id, title } = person;

            return (
              <div className={'topbar__button'} key={id}>
                {title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
