import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 500 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.5;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00dfd8"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function AnimatedShape() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 4) / 2;
    mesh.current.rotation.y = Math.sin(t / 4) / 2;
    mesh.current.rotation.z = Math.sin(t / 4) / 2;
    mesh.current.position.y = Math.sin(t / 2) / 2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#0070f3"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00dfd8" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#0070f3" />
        <AnimatedShape />
        <FloatingParticles count={1000} />
      </Canvas>
    </div>
  );
}
