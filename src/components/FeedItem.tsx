import * as React from 'react'
import * as styles from './FeedItem.css'

export interface FeedItemProps {
  description?: string
  link?: string
  title?: string
}

const FeedItem = ({title, link, description}: FeedItemProps) =>
  <section className={styles.container}>
    <header>{title || 'no title'}</header>
    <details>{description || 'no description'}</details>
    <a href={link || ''}>{link || 'no link'}</a>
  </section>

export {FeedItem}
