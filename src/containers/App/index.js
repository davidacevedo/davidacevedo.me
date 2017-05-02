import React, { Component } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import styles from './styles.scss';

export default class App extends Component {
  state = {
    sidebarExpanded: false,
  };

  toggleSidebar = (event) => {
    event.stopPropagation();
    this.setState({ sidebarExpanded: !this.state.sidebarExpanded });
  };

  closeSidebar = () => {
    this.setState({ sidebarExpanded: false });
  };

  componentWillMount() {
    window.addEventListener('click', this.closeSidebar);
  };

  componentWillUnmount() {
    window.removeEventListener('click', this.closeSidebar);
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.app}>
        <Header toggleSidebar={this.toggleSidebar} />
        <div className={styles.main}>
          <Sidebar sidebarExpanded={this.state.sidebarExpanded} closeSidebar={this.closeSidebar}/>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  }
}
