import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './styles.scss';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
        
      </div>
    )
  }
}
