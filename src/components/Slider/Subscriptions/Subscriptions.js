import React from 'react';
import Item from '../Item/Item';
import Avatar from '../../../assets/images/User-Avatar.jpg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrowBottom.svg';
import './subscriptions.css';
function Subscriptions() {
  return (
    <div className='sidebar__subscriptions'>
      <div className='item__title'>SUBSCRIPTIONS</div>
      <Item title={'channel name'} h3={'Subscriptions'}>
        <img src={Avatar} />
      </Item>
      <Item title={'channel name'}>
        <img src={Avatar} />
      </Item>
      <Item title={'channel name'}>
        <img src={Avatar} />
      </Item>
      <Item title={'channel name'}>
        <img src={Avatar} />
      </Item>
      <Item title={'channel name'}>
        <img src={Avatar} />
      </Item>
      <Item title={'channel name'}>
        <img src={Avatar} />
      </Item>
      <Item title={'channel name'}>
        <img src={Avatar} />
      </Item>
      <Item title={'show more'}>
        <Arrow />
      </Item>
    </div>
  );
}

export default Subscriptions;
