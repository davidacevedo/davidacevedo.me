import React, { Component } from 'react';

import profile from './assets/sidebar-pic.jpg';
import styles from './styles.scss';

export default class Sidebar extends Component {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  render() {
    const { router } = this.context;

    return (
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <img className={styles.profileImage} src={profile} />
          <div className={styles.name}>David Acevedo</div>
        </div>
        
        <div className={styles.about} onClick={() => router.replace('/')}>About</div>
        <div className={styles.about} onClick={() => router.replace('/test')}>Test</div>
      </div>
    )
  }
}