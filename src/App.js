import React from 'react';
import {FeedItem} from './components/FeedItem';

export const App = () => (
  <div>
    <FeedItem
      description="piyopiyo"
      link="example.com"
      title="hoge"
    />
    <FeedItem
      description=""
      link=""
      title=""
    />
    <FeedItem />
  </div>
);
