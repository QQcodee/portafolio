import { useState } from "react";
import { useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicios from "./components/Servicios";
import CalendlyButton from "./components/CalendlyButton";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.001;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[10, 60, 60]} />

      <meshLambertMaterial color="#468585" />
    </mesh>
  );
};

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <NavBar />
        <Hero />
        <About />

        <Servicios />
        <div className="p-10 flex justify-center sticky bottom-0 items-center">
          {" "}
          <a href="tel:+526143035198">
            <button className="sticky bottom-5  z-50 bg-white font-generalsans px-5 py-2 rounded-full w-full  text-black flex justify-center items-center gap-3 text-lg sm:hidden ">
              <i className="material-icons">call</i>Llamar ahora{" "}
            </button>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
