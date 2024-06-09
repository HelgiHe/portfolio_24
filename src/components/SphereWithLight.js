"use client";

import { Sphere } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const SphereWithLight = ({pos, lightPos, args, lightColor = "#208ADE"}) => {
  const sphereRef1 = useRef();
  const spotlightRef1 = useRef();

  useEffect(() => {
    // Set the target of the spotlight to the sphere
    if (spotlightRef1.current && sphereRef1.current) {
      spotlightRef1.current.target = sphereRef1.current;
    }
  }, []);

  return (
    <>
      <spotLight
        ref={spotlightRef1}
        position={lightPos}
        color={lightColor}
        intensity={30}
        distance={30}
        angle={0.5}
        penumbra={1}
        decay={1}
        castShadow
      />

      <Sphere
        ref={sphereRef1}
        position={pos}
        args={args}
      >
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.6}
          roughness={0.6}
          reflectivity={0.9}
          castShadow
        />
      </Sphere>
    </>
  );
};
