import React, { Component } from 'react';
import { Link } from 'react-router';

import profile from './assets/profile.jpg';

import styles from './styles.scss';

export default class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  render() {
    const { router } = this.context;
    return (
      <header className={styles.header}>
        <div className={styles.headerItems}>
          <div className={styles.title} onClick={() => router.push('/')}>davidacevedo.me</div>
          <Link className={styles.test} to="test">Test</Link>
          <img className={styles.profile} src={profile} />
        </div>
        {/*<div className={styles.padding} />*/}
      </header>
    )
  }
}