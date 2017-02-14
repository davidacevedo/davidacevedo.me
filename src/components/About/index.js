import React, { Component } from 'react';
import Profile from './Profile';

import styles from './styles.scss';

export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <Profile />
      </div>
    )
  }
}