import React from 'react';
import { ReactComponent as Create } from '../../../assets/icons/create.svg';
import { ReactComponent as Apps } from '../../../assets/icons/apps.svg';
import { ReactComponent as Notifications } from '../../../assets/icons/notifications.svg';
import Avatar from '../../../assets/images/User-Avatar.jpg';
import './option.css';
function Option() {
  const data = [
    { id: '1', icon: <Create /> },
    { id: '2', icon: <Apps /> },
    { id: '3', icon: <Notifications /> },
  ];
  return (
    <div className='navigation__option'>
      <div className='navigation__option-list'>
        <ul>
          {data.map((value, key) => {
            return (
              <li key={key} className='navigation__option-icon-container'>
                <div className='navigation__option-icon'>{value.icon}</div>
              </li>
            );
          })}
        </ul>
        <div className='navigation__option-profile'>
          <div className='navigation__option-profile-pic'>
            <div className='profile-pic__img'>
              <img src={Avatar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
