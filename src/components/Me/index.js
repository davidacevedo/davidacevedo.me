import React, { Component } from 'react';
import Banner from './Banner';
import Skills from './Skills';
// import About from './About';

import styles from './styles.scss';

export default class Me extends Component {
  render() {
    return (
      <div ref="me" className={styles.me}>
        <Banner />
        <Skills />
      </div>
    );
  }
}
