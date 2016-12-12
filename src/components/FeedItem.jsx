import React, {PropTypes} from 'react';
import styles from './FeedItem.css';

export const FeedItem = ({title, link, description}) =>
  <section className={styles.container}>
    <header>{title || 'no title'}</header>
    <p>{description || 'no description'}</p>
    <a>{link || 'no link'}</a>
  </section>;
FeedItem.propTypes = {
  description: PropTypes.string.isRequired,
  link       : PropTypes.string.isRequired,
  title      : PropTypes.string.isRequired
};
