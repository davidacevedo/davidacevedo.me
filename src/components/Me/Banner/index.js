import React, { Component } from 'react';
import Polaroid from './Polaroid';

import styles from './styles.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className={styles.profile}>
        {/*<Polaroid />*/}
        <div className={styles.textContent}>
          <div className={styles.title}>
            <div>Hello!</div>
            <div>My name is David.</div>
            <div>I'm a front-end developer.</div>
          </div>
        </div>
      </div>
    );
  }
}
