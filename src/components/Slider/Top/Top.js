import React from 'react';
import { ReactComponent as Home } from '../../../assets/icons/home-fill.svg';
import { ReactComponent as Explore } from '../../../assets/icons/explore.svg';
import { ReactComponent as Subscriptions } from '../../../assets/icons/subscriptions.svg';
import { ReactComponent as Library } from '../../../assets/icons/library.svg';
import { ReactComponent as History } from '../../../assets/icons/history.svg';
import { ReactComponent as YourVideos } from '../../../assets/icons/yourVideos.svg';
import { ReactComponent as Watch } from '../../../assets/icons/watchLater.svg';
import { ReactComponent as LikedVideos } from '../../../assets/icons/liked.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrowBottom.svg';
import Item from '../Item/Item';
import './top.css';
function Top() {
  return (
    <>
      <div className='slider__top'>
        <Item className='active' title='home'>
          <Home />
        </Item>
        <Item title='explore'>
          <Explore />
        </Item>
        <Item title='subscriptions'>
          <Subscriptions />
        </Item>
      </div>
      <div className='slider__top__bottom'>
        <Item title='library'>
          <Library />
        </Item>
        <Item title='history'>
          <History />
        </Item>
        <Item title='your videos'>
          <YourVideos />
        </Item>
        <Item title='watch later'>
          <Watch />
        </Item>
        <Item title='liked videos'>
          <LikedVideos />
        </Item>
        <Item title='show more'>
          <Arrow />
        </Item>
      </div>
    </>
  );
}

export default Top;
