"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RandomGeometryScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const geometries = [
    new THREE.TorusGeometry(10, 3, 16, 100),
    new THREE.TetrahedronGeometry(12,3),
    new THREE.SphereGeometry( 10, 32, 16 ),
    new THREE.ConeGeometry( 10, 20, 6 ),
    new THREE.BoxGeometry( 14,14, 14 )
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        camera.position.z = 30; // Position the camera
        camera.position.x = 2;

        scene.background = new THREE.Color( 0xffffff );

        renderer.setPixelRatio(window.devicePixelRatio)
        if(window.innerWidth < 768){
          renderer.setSize(window.innerWidth, window.innerWidth);
        }else{
          renderer.setSize(window.innerWidth /4, window.innerWidth /4);
        }
        containerRef.current?.appendChild(renderer.domElement); 

        const geometry = geometries[(Math.floor(Math.random() * geometries.length))]
        const material = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})
        const torus = new THREE.Mesh(geometry, material)
        torus.rotation.y += 10;

        scene.add(torus);
        
        const renderScene = () => {
          torus.rotation.x += 0.01;
          renderer.render(scene, camera);
          requestAnimationFrame(renderScene);
        };

        const resize = () => {
            if(window.innerWidth < 768){
              renderer.setSize(window.innerWidth, window.innerWidth );
            }else{
              renderer.setSize(window.innerWidth /4, window.innerWidth /4);
            }
        }
        window.addEventListener( 'resize', resize );
        renderScene();
    }
  }, []);
  return <div ref={containerRef} />;
};
export default RandomGeometryScene;