import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export const BouncingSphere = ({
  initalPos,
  initalVelocityY = 0.1,
  initalVelocityX = 0.08,
  initalVelocityZ = 0.05,
}) => {
  const sphereRef = useRef();
  const [position, setPosition] = useState(initalPos);
  const [velocityY, setVelocityY] = useState(initalVelocityY);
  const [velocityX, setVelocityX] = useState(initalVelocityX);
  const [velocityZ, setVelocityZ] = useState(initalVelocityZ);
  const gravity = -0.005;
  const bounceFactor = -0.6;
  const groundLevel = -4;
  const friction = 0.99;

  useFrame(() => {
    // Update position based on velocity
    const newY = position[1] + velocityY;
    const newX = position[0] + velocityX;
    const newZ = position[2] + velocityZ;

    if (sphereRef.current) {
      sphereRef.current.position.set(newX, newY, newZ);
    }

    let newVelocityY = velocityY + gravity;

    if (newY <= groundLevel) {
      newVelocityY = velocityY * bounceFactor;
    }

    // Apply friction
    const newVelocityX = velocityX * friction;
    newVelocityY *= friction;
    const newVelocityZ = velocityZ * friction;

    setPosition([newX, newY > groundLevel ? newY : groundLevel, newZ]);
    setVelocityY(newVelocityY);
    setVelocityX(newVelocityX);
    setVelocityZ(newVelocityZ);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere ref={sphereRef} args={[0.3, 12, 12]} position={position}>
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.6}
          roughness={0.4}
          reflectivity={0.9}
          castShadow
        />{" "}
      </Sphere>
    </>
  );
};
