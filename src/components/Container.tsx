import * as React from 'react';
import {FeedItem, FeedItemProps} from './FeedItem';

export interface ContainerProps {
  FeedItems?: FeedItemProps[];
}

const Container = ({FeedItems}: ContainerProps) => {
  const FeedList = FeedItems.map((item: FeedItemProps, index: number) =>
    <li key={index}>
      <FeedItem
        description={item.description}
        link={item.link}
        title={item.title}
      />
    </li>
  );

  return (
    <ul>
      {FeedList}
    </ul>);
};

export {Container}
