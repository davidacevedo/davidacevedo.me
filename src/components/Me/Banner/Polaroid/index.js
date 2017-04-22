import React, { Component } from 'react';

import profile from './assets/profile.jpg';
import styles from './styles.scss';

// Maybe look up Pure Component?
export default class Banner extends Component {
  render() {
    return (
      <div className={styles.polaroid}>
        <img className={styles.image} src={profile} />
        <div className={styles.title}>Software Engineer</div>
        <div className={styles.name}>David Acevedo</div>
      </div>
    );
  }
}