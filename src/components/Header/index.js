import React, { Component } from 'react';
import { Link } from 'react-router';

import profile from './assets/profile.jpg';
import hamburger from './assets/hamburger.svg';

import styles from './styles.scss';

export default class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  render() {
    const { router } = this.context;
    const { toggleSidebar } = this.props;
    return (
      <header className={styles.header}>
        <div className={styles.headerItems}>
          <img className={styles.hamburger} onClick={toggleSidebar} src={hamburger} />
          <Link className={styles.title} to="/">davidacevedo.me</Link>
        </div>
      </header>
    )
  }
}