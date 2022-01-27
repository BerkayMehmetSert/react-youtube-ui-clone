import React from 'react';
import './item.css';
function Item({ children, title, className, h3 }) {
  return (
    <>
      <div className={'item ' + (className || '')}>
        <a href='/' className='item__link'>
          <div className='item__link-container'>
            <div className='item__link__icon'>{children}</div>
            <div className='item__link__title'>{title}</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Item;
