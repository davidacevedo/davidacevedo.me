import React, { Component } from 'react';
import * as d3 from 'd3';

import styles from './styles.scss';

export default class D3Test extends Component {
  componentDidMount() {
    const data = [1, 2, 3];
    const div = this.refs.bargraph;
    const graph = d3.select(div);
    const p = graph.selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .text('hello');

      console.log(p)
  }

  render() {
    console.log(d3);
    return (
      <div ref="bargraph" className={styles.d3Test} />
    )
  }
}