import React from 'react';
import { ReactComponent as Premium } from '../../../assets/icons/premium.svg';
import { ReactComponent as Gaming } from '../../../assets/icons/gaming.svg';
import { ReactComponent as Live } from '../../../assets/icons/live.svg';
import { ReactComponent as Sports } from '../../../assets/icons/sports.svg';
import { ReactComponent as Settings } from '../../../assets/icons/settings.svg';
import { ReactComponent as History } from '../../../assets/icons/history.svg';
import { ReactComponent as Help } from '../../../assets/icons/help.svg';
import { ReactComponent as Feedback } from '../../../assets/icons/feedback.svg';
import Item from '../Item/Item';
import './from.css';
function From() {
  return (
    <>
      <div className='slider__form'>
        <div className='item__title'>MORE FROM YOUTUBE</div>
        <Item title='youtube premium'>
          <Premium />
        </Item>
        <Item title='gaming'>
          <Gaming />
        </Item>
        <Item title='live'>
          <Live />
        </Item>
        <Item title='sports'>
          <Sports />
        </Item>
      </div>
      <div className='slider__form__bottom'>
        <Item title='settings'>
          <Settings />
        </Item>
        <Item title='report history'>
          <History />
        </Item>
        <Item title='help'>
          <Help />
        </Item>
        <Item title='send feedback'>
          <Feedback />
        </Item>
      </div>
    </>
  );
}

export default From;
