import React from 'react';
import Center from './center/Center';
import Option from './option/Option';
import './navigation.css';
import Start from './start/Start';
function Navigation() {
  return (
    <div className='navigation'>
      <Start />
      <Center />
      <Option />
    </div>
  );
}

export default Navigation;
