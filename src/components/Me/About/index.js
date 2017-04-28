import React, { Component } from 'react';
import MyContent from '../MyContent';
import styles from './styles.scss';

export default class Me extends Component {
  render() {
    return (
      <div className={styles.me}>
        <div className={styles.title}>About Me</div>
        <div className={styles.description}>
          I'm a Frontend Developer.
        </div>
      </div>
    );
  }
}
