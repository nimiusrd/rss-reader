import React, {PropTypes} from 'react';
import styles from './FeedItem.css';

export const FeedItem = ({title, link, description}) =>
  <section className={styles.container}>
    <header>{title || 'no title'}</header>
    <details>{description || 'no description'}</details>
    <a href={link}>{link || 'no link'}</a>
  </section>;
FeedItem.propTypes = {
  description: PropTypes.string.isRequired,
  link       : PropTypes.string.isRequired,
  title      : PropTypes.string.isRequired
};
