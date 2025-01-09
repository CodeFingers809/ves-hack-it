import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ width, height }) => {
  const particlesRef = useRef();

  useEffect(() => {
    const particles = particlesRef.current;
    const count = 2000;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const createCircleTexture = () => {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d");

      context.beginPath();
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 3);
      context.fillStyle = "white";
      context.fill();

      return new THREE.CanvasTexture(canvas);
    };

    const circleTexture = createCircleTexture();

    particles.geometry = geometry;
    particles.material = new THREE.PointsMaterial({
      map: circleTexture,
      size: 0.02,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y -= 0.002;
    }
  });

  return <points ref={particlesRef} />;
};

const ParticleEffect = ({ width, height, className }) => {
  return (
    <Canvas
      style={{
        width: `${100}vw`,
        height: `${100}vh`,
        position: "fixed",
        top: 0,
        left: 0,
      }}
      className="bg-black absolute inset-0  w-full h-full pointer-events-none -z-50"
    >
      <ambientLight />
      <Particles width={width} height={height} />
    </Canvas>
  );
};

export default ParticleEffect;
