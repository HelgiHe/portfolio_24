"use client";
import { Suspense, useRef, useMemo, useEffect } from "react";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
import { GridHelper } from "three";
import { SphereWithLight } from "./SphereWithLight";
import { BouncingSphere } from "./BouncingSphere";

export const Scene = () => {
  const cameraRef = useRef();
  const boxRotation = useMemo(() => [0, Math.PI / 2.2, 0], []);
  // Create references for the spheres and spotlights
  const sphereRef1 = useRef();
  const spotlightRef1 = useRef();

  useEffect(() => {
    // Set the target of the spotlight to the sphere
    if (spotlightRef1.current && sphereRef1.current) {
      spotlightRef1.current.target = sphereRef1.current;
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <primitive
        object={new GridHelper(18, 15)}
        position={[-4, -5, -5]}
        rotation={[0, 0, 0]}
      />
      {/* Camera setup */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[15, 4.15, 15]}
        fov={30}
      />
      {/* Lighting */}
      <ambientLight intensity={4} color="#ffffff" />

      <directionalLight
        position={[-14, 13, 2]}
        intensity={4}
        color="#ffffff"
        castShadow
      />
      <SphereWithLight
        pos={[-8.5, -3, 0]}
        lightPos={[-4.5, -2, 1]}
        args={[1, 12, 12]}
        lightColor="#208ADE"
      />
      <SphereWithLight
        pos={[-5.6, 1, 4]}
        lightPos={[-2, -1, 4]}
        args={[0.6, 12, 12]}
        lightColor="#208ADE"
      />
      <SphereWithLight
        pos={[7.5, -1, -1]}
        lightPos={[10.5, -2, -1]}
        args={[0.8, 12, 12]}
        lightColor="#208ADE"
      />
      <SphereWithLight
        pos={[7.2, 1, -3]}
        lightPos={[10.2, -1, -3]}
        args={[0.6, 12, 12]}
        lightColor="#208ADE"
      />
      <SphereWithLight
        pos={[7.2, 4, 0]}
        lightPos={[12.2, 2, 0]}
        args={[1, 12, 12]}
        lightColor="#B53928"
      />
      <SphereWithLight
        pos={[-8.5, 3, 0]}
        lightPos={[-4.5, 0.2, 1]}
        args={[0.2, 12, 12]}
        lightColor="#B53928"
      />
      <SphereWithLight
        pos={[0, 4, 0]}
        lightPos={[3, 1, 1]}
        args={[0.4, 12, 12]}
        lightColor="#B53928"
      />

      <BouncingSphere
        initalPos={[-5, -3, -6]}
       />
      <BouncingSphere
        initalPos={[-6, -2, -4]}
        initalVelocityX={0.09}
        initalVelocityY={0.05}
        initalVelocityZ={0.055}
       />
      <BouncingSphere
        initalPos={[-7, -0.5, -5.6]}
        initalVelocityX={0.09}
        initalVelocityY={0.05}
        initalVelocityZ={0.055}
       />

      <Box
        position={[-2, 1.5, 0]}
        args={[2, 1.5, 0.5]}
        rotation={boxRotation}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.6}
          roughness={0.4}
          reflectivity={1}
          castShadow
        />
      </Box>

      <Box
        position={[-1, 1.4, -7]}
        args={[1, 1, 1.3]}
        rotation={boxRotation}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.6}
          roughness={0.4}
          reflectivity={1}
          castShadow
        />
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
