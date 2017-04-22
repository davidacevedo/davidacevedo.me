import React, { Component } from 'react';

import profile from './assets/sidebar-pic.jpg';
import styles from './styles.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <img className={styles.profileImage} src={profile} />
          <div className={styles.name}>David Acevedo</div>
        </div>
        
        <div className={styles.about}>About (TBD)</div>
        <div className={styles.about}>Test (TBD)</div>
      </div>
    )
  }
}