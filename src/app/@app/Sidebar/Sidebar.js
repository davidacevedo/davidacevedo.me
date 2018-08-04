import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import profile from './assets/sidebar-pic.jpg';
import styles from './Sidebar.scss';

export default class Sidebar extends Component {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  render() {
    const { router } = this.context;
    const { closeSidebar, sidebarExpanded } = this.props;

    return (
      <div className={classnames(styles.sidebar, sidebarExpanded && styles.sidebarExpanded)} onClick={event => event.stopPropagation()}>
        <div className={styles.header}>
          <img className={styles.profileImage} src={profile} />
          <div className={styles.name}>David Acevedo</div>
        </div>
        
        <Link className={styles.about} onClick={closeSidebar} to="/">About</Link>
        <Link className={styles.about} onClick={closeSidebar} to="/projects">Projects</Link>
        <Link className={styles.about} onClick={closeSidebar} to="/photosphere">Photosphere</Link>
      </div>
    )
  }
}