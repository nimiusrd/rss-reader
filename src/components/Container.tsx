import * as React from 'react'
import {FeedItem, FeedItemProps} from './FeedItem'
import {PreferenceButton} from './PreferenceButton'

export interface ContainerProps {
  FeedItems: FeedItemProps[]
}

const Container = ({FeedItems}: ContainerProps): JSX.Element => {
  const FeedList: JSX.Element[] =
    FeedItems.map((item: FeedItemProps, index: number) =>
      <li key={index}>
        <FeedItem
          description={item.description}
          link={item.link}
          title={item.title}
        />
        <PreferenceButton id={item.link} />
      </li>
    )

  return (
    <ul>
      {FeedList}
    </ul>)
}

export {Container}
