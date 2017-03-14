import React, { Component } from 'react';
import { Link } from 'react-router';

import profile from './assets/profile.jpg';

import styles from './styles.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.title}>davidacevedo.me</div>
        <Link className={styles.test} to="test">Test</Link>
        <img className={styles.profile} src={profile} />
      </header>
    )
  }
}