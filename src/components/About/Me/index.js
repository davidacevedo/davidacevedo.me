import React, { Component } from 'react';
import styles from './styles.scss';

export default class Me extends Component {
  render() {
    return (
      <div className={styles.me}>
        <div className={styles.title}>Why I created this website?</div>
        <div className={styles.body}>
          I wanted to create a place where I publicly document, demo, and experiment with software that I find interesting.
          Not only that, the website will serve as a long term project that will potentially incorporate other projects.
          If none of that happens then this will just serve as a "resume".
        </div>

        <div className={styles.title}>Who am I?</div>
        <div className={styles.body}>
          I'm a Software Engineer who spends most of his time working on the frontend portion of the spectrum.
          The reason I chose that is that I like the constant changes that are happening everyday with javascript technologies.
        </div>

        <div className={styles.finalThoughts}>Thanks For Viewing</div>
      </div>
    )
  }
}