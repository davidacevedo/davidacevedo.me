import React, { Component } from 'react';

import styles from './styles.scss';

export default class ComingSoon extends Component {
  render() {
    return (
      <div className={styles.comingSoon}>
        <div className={styles.circle} />
        <div className={styles.title}>Coming Soon</div>
      </div>
    )
  }
}