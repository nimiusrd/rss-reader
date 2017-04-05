import * as React from 'react';
import * as styles from './FeedItem.css';

export const FeedItem = ({title, link, description}) =>
  <section className={styles.container}>
    <header>{title || 'no title'}</header>
    <details>{description || 'no description'}</details>
    <a href={link || ""}>{link || 'no link'}</a>
  </section>;
