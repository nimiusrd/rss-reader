import * as React from 'react'
import {FeedItem, FeedItemProps} from './FeedItem'
import {PreferenceButton} from './PreferenceButton'
import {writeItem, writeFeed} from '../firebase'

export interface ContainerProps {
  feedId: string,
  feedItems: FeedItemProps[]
}

const Container = ({feedId, feedItems}: ContainerProps): JSX.Element => {
  const feedList: JSX.Element[] =
    feedItems.map((item: FeedItemProps) => {
      writeItem({
        userId     : 'hoge' || '',
        description: item.description || '',
        feedId,
        link       : item.link || '',
        itemId     : item.itemId || '',
        title      : item.title || ''
      })

      return (
        <li key={item.itemId}>
          <FeedItem
            description={item.description}
            link={item.link}
            title={item.title}
          />
          <PreferenceButton
            feedId={feedId || ''}
            itemId={item.itemId}
          />
        </li>
      )
    })

  writeFeed({
    userId: 'hoge',
    feedId,
    title : 'hoge',
    url   : 'hoge'
  })

  return (
    <ul>
      {feedList}
    </ul>)
}

export {Container}
