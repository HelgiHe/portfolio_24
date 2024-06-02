"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useMemo, useEffect } from "react";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
import { GridHelper } from "three";

export const SphereComponent = () => {
  const cameraRef = useRef();
  const { camera } = useThree();
  const boxRotation = useMemo(() => [0, Math.PI / 2.2, 0], []);

  useEffect(() => {
    cameraRef.current.layers.enable(1);
  }, []);

  return (
    <Suspense fallback={null}>
      <primitive
        object={new GridHelper(18, 15)}
        position={[-4, -5, -5]} // Positioning the grid at y = -1
        rotation={[0, 0, 0]} // Rotating to lay flat
      />
      {/* Camera setup */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[15, 4.15, 15]}
        fov={30}
        layers={[0, 1]}
      />

      {/* Lighting */}
      <ambientLight intensity={2} color="#fff" layers={[0, 1]} />
      <directionalLight
        position={[15, -3, 4]}
        intensity={8}
        color="#208ADE"
        castShadow
        layers={0}
      />

      <directionalLight
        position={[15, -3, 4]}
        intensity={8}
        color="#B53928"
        castShadow
        layers={1}
      />

      {/* layer 0 */}
      <Sphere position={[-7.5, -3, 0]} args={[1, 12, 12]} layers={0}>
        <meshPhongMaterial attach="material" color="#ffffff" />
      </Sphere>
      <Sphere position={[-15, 0, -5]} args={[0.6, 12, 12]}>
        <meshPhongMaterial attach="material" color="#ffffff" />
      </Sphere>
      <Sphere position={[7.5, -1, 0]} args={[1, 12, 12]}>
        <meshPhongMaterial attach="material" color="#ffffff" />
      </Sphere>
      <Sphere position={[7.2, 1, 3]} args={[0.6, 12, 12]}>
        <meshPhongMaterial attach="material" color="#ffffff" />
      </Sphere>

      {/* layer 1 */}
      <Box
        position={[-2, 1.5, 0]}
        args={[2, 1.5, 0.5]}
        rotation={boxRotation}
        castShadow
        receiveShadow
        layers={1}
      >
        <meshPhongMaterial attach="material" color="#ffffff" />
      </Box>

      <Box
        position={[-1, 1.4, -7]}
        args={[1, 1, 1.3]}
        rotation={boxRotation}
        castShadow
        receiveShadow
        layers={1}
      >
        <meshPhongMaterial attach="material" color="#ffffff" />
      </Box>

      {/* Controls */}
      <OrbitControls
        camera={cameraRef.current}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </Suspense>
  );
};
