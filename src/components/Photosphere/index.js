import React, { Component } from 'react';
import * as THREE from 'three';
window.THREE = THREE;
import orbitControls from 'three-orbit-controls';
const OrbitControls = orbitControls(THREE);

import image from './assets/panorama.jpg';

import styles from './styles.scss';

export default class Photosphere extends Component {
  componentDidMount() {
    const photosphere = this.refs.photosphere;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, photosphere.scrollWidth/photosphere.scrollHeight, .1, 1000);
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(photosphere.scrollWidth, photosphere.scrollHeight);
    photosphere.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(100, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2);
    // var material = new THREE.MeshFaceMaterial( [
    // new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image ) } ),] );
    // const cube = new THREE.Mesh( geometry, material );
    const texture = THREE.ImageUtils.loadTexture(image);
    const sphere = new THREE.Mesh(
			geometry,
			new THREE.MeshBasicMaterial({
				map: texture
			})
		);
    scene.add( sphere );

    // Create orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enablePan = false;
    // controls.enableZoom = false;
    controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;
    

    // camera.position.z = 5;

    function render() {
      requestAnimationFrame( render );
      // sphere.rotation.x += 0.01;
      // sphere.rotation.y += 0.01;
      renderer.render( scene, camera );
      controls.update();
    }

    window.addEventListener('resize', function() {
      const WIDTH = photosphere.scrollWidth;
      const HEIGHT = window.innerHeight - 64;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    })
    render();


    // const sphere = new THREE.Mesh(
    //   new THREE.SphereGeometry(100, 32, 32),
    //   new THREE.MeshBasicMaterial({
    //     map: THREE.TextureLoader(image),
    //   })
    // );


  }

  render() {
    return (
      <div ref="photosphere" className={styles.photosphere}></div>
    );
  }
}
