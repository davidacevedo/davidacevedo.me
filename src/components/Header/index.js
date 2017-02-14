import React, { Component } from 'react';

import profile from './assets/profile.jpg';

import styles from './styles.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>   
        <div className={styles.title}>davidacevedo.me</div>
        <img className={styles.profile} src={profile} />
      </header>
    )
  }
}