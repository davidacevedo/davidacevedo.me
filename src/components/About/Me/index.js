import React, { Component } from 'react';
import MyContent from '../MyContent';
import styles from './styles.scss';

export default class Me extends Component {
  render() {
    return (
      <div className={styles.me}>
        <div className={styles.buttons}>
          <div className={styles.about}>About</div>
          <div className={styles.skills}>Skills</div>
        </div>
        <MyContent />
      </div>
    );
  }
}