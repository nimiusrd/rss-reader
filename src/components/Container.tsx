import * as React from 'react'
import {FeedItem, FeedItemProps} from './FeedItem'
import {PreferenceButton} from './PreferenceButton'

export interface ContainerProps {
  feedId: string,
  feedItems: FeedItemProps[]
}

const Container = ({feedId, feedItems}: ContainerProps): JSX.Element => {
  const feedList: JSX.Element[] =
    feedItems.map((item: FeedItemProps, index: number) =>
      <li key={index}>
        <FeedItem
          description={item.description}
          link={item.link}
          title={item.title}
        />
        <PreferenceButton
          feedId={feedId}
          itemId={item.link}
        />
      </li>
    )

  return (
    <ul>
      {feedList}
    </ul>)
}

export {Container}
