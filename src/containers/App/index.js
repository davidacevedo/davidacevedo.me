import React, { Component } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import styles from './styles.scss';

export default class App extends Component {
  state = {
    sidebarExpanded: false,
  };

  expandSidebar = () => {

  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.main}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  }
}
