/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 5 : 3}
      position={[0, 0, 0]}
      frustumCulled={true}
      renderOrder={1}
    />
  );
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(8000), { radius: 100 });
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          color="#f272c8"
          emissive="#ffffff" // Stronger emissive color (white)
          emissiveIntensity={8} // Higher intensity for stronger glow
          size={0.05} // Larger size for better visibility
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const MainCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MainCanvas;
