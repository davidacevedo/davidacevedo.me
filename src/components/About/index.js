import React, { Component } from 'react';
import Banner from './Banner';
import Me from './Me';

import styles from './styles.scss';

export default class About extends Component {
  render() {
    return (
      <div ref="about" className={styles.about}>
        <Banner />
        <Me />
      </div>
    );
  }
}
