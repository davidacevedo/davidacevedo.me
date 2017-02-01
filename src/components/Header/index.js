import React, { Component } from 'react';

import styles from './styles.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.title}>davidacevedo.me</div>
      </div>
    )
  }
}