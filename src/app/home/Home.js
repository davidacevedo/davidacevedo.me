import React, { Component } from 'react';
import Banner from './Banner/Banner';

import styles from './Home.scss';

export default class Me extends Component {
  render() {
    return (
      <div ref="me" className={styles.me}>
        <Banner />
      </div>
    );
  }
}
