import React, { Component } from 'react';
import * as d3 from 'd3';
import 'particles.js';

import styles from './styles.scss';

export default class SinCosGraphs extends Component {
  generateGraph = () => {
    
  }

  componentDidMount() {
    console.log(particlesJS);
    // const graph = d3.select(this.refs.graph)
    //   .append('svg')
    //   .style('width', '100%')
    //   .style('height', '100%');

    // const xScale = d3.scaleLinear()
    //   .domain([0, 100])
    //   .range([0, 1000]);

    // const yScale = d3.scaleLinear()
    //   .domain([0, 100])
    //   .range([0, 280]);

    // const xAxis = d3.axisBottom(xScale);
    // const yAxis = d3.axisLeft(yScale);
    // const lineFunction = d3.line()
    //   .x((d, i, a) => {console.log(i); console.log(a);  return xScale(d.x)})
    //   .y((d) => yScale(d.y))
    //   .curve(d3.curveCatmullRom.alpha(0.5));

    // // graph.append('g')
    // //   .attr("transform", "translate(0,30)")
    // //   .call(xAxis);

    // // graph.append('g')
    // //   .attr("transform", "translate(30,0)")
    // //   .call(yAxis);

    // var lineData = [ 
    //   { "x": 0,   "y": 0},  { "x": 20,  "y": 20},
    //   { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
    //   { "x": 80,  "y": 5},  { "x": 100, "y": 100}
    // ];

    // graph.append('path')
    //   .attr('d', lineFunction(lineData))
    //   .attr('stroke', 'blue')
    //   .attr("stroke-width", 3)
    //   .attr('fill', 'none');


    particlesJS.load('particles', 'particle-config.json', () => {
      console.log('Done loading');
    });
    
  }

  render() {
    return (
      <div id="particles" className={styles.sinCosGraphs} />
    )
  }
}
