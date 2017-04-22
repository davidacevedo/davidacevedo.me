import React, { Component } from 'react';
import * as THREE from 'three';
window.THREE = THREE;
import orbitControls from 'three-orbit-controls';
const OrbitControls = orbitControls(THREE);

import image from './assets/equirect.png';

import styles from './styles.scss';

export default class Photosphere extends Component {


  componentDidMount() {
    const photosphere = this.refs.photosphere;
    const refs = this.refs;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, photosphere.scrollWidth/photosphere.scrollHeight, 1, 1100);
    camera.position.set(0, 1, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(photosphere.scrollWidth, photosphere.scrollHeight);
    photosphere.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(100, 32, 32);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(image, function() {
        render();
      }),
    });
    // var material = new THREE.MeshFaceMaterial( [
    // new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image ) } ),] );
    // const cube = new THREE.Mesh( geometry, material );
    // const texture = THREE.ImageUtils.loadTexture(image);
    const sphere = new THREE.Mesh(
			geometry,
			material,
		);

    renderer.setPixelRatio(window.devicePixelRatio);
    scene.add( sphere );

    // Create orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.enablePan = true;
    controls.enableZoom = true;
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;
    
    // controls.addEventListener('change', render);

    // camera.position.z = 5;

    function render() {
      // console.log('rendered');
      requestAnimationFrame( render );
      // sphere.rotation.x += 0.01;
      // sphere.rotation.y += 0.001;
      controls.update();
      renderer.render( scene, camera );
    }


    this.resizeFunction = function() {
      const WIDTH = photosphere.clientWidth;
      const HEIGHT = photosphere.clientHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', this.resizeFunction);
    


    // const sphere = new THREE.Mesh(
    //   new THREE.SphereGeometry(100, 32, 32),
    //   new THREE.MeshBasicMaterial({
    //     map: THREE.TextureLoader(image),
    //   })
    // );

    // render();
    // requestAnimationFrame(render);
    // render();
    // render();
    // render();
    // render();

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction);
  }

  render() {
    return (
      <div ref="photosphere" className={styles.photosphere}>
        <div className={styles.credit}>Photo by&nbsp;
          <a target="_blank" rel="nofollow" href="https://www.flickr.com/photos/jonragnarsson/2294472375/">Jon Ragnarsson</a>
        </div>
      </div>
    );
  }
}
