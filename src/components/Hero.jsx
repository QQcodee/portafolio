import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

import { OrbitControls, PerspectiveCamera, Ring } from "@react-three/drei";
import HackerRoom from "./HackerRoom";
import CanvasLoader from "./Loading";
import ReactLogo from "./ReactLogo";
import HeroCamera from "./HeroCamara";
import { useEffect } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[6, 6, 6]} />

      <meshLambertMaterial color="#468585" opacity={0.5} />
    </mesh>
  );
};

const Hero = () => {
  useEffect(() => {
    // Check if the Calendly script is already loaded to avoid duplicates
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    // Check if Calendly is available on window object, then initialize the popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/enrique-cb/asesoria-gratuita",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen w-full flex flex-col position-relative  "
    >
      <div className="z-10 w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 items-center">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans mt-10">
          Hola, soy Enrique <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient">
          Diseño Web Profesional y Estrategias Digitales a Medida
        </p>

        <button
          onClick={openCalendly}
          className="flex justify-center items-center bg-white font-generalsans px-5 py-2 rounded-full w-[max-content]"
        >
          Cuentame mas de tu proyecto{" "}
          <i className="material-icons ml-2">arrow_forward</i>
        </button>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={CanvasLoader}>
            <ambientLight intensity={0.8} />
            <pointLight intensity={40} position={[1, 5, 1]} color="white" />
            <pointLight intensity={20} position={[5, 1, 5]} color="red" />
            <pointLight intensity={20} position={[3, 3, 5]} color="white" />
            <pointLight intensity={50} position={[-10, 3, 1]} color="white" />

            <HeroCamera>
              <ReactLogo position={[0, -7, 0]} scale={0.03} />
            </HeroCamera>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
