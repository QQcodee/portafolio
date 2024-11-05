import React from "react";
import Button from "./Button";
import MyIcon from "../assets/marketing.svg";
import WebDesign from "../assets/web-design.svg";
import CalendlyButton from "./CalendlyButton";

const Servicios = () => {
  return (
    <div className="text-white w-full p-10 font-generalsans text-center  flex flex-col justify-center items-center gap-5 flex mx-auto ">
      <div className="flex gap-10 justify-center items-center ">
        <img
          src={WebDesign}
          alt="MyIcon"
          className="w-[400px] hidden md:block"
        />
        <div className="flex flex-col gap-5">
          <div className="text-[27px] font-bold">Diseño Web Profesional</div>
          <p className="grid-subtext text-justify">
            Servicio de diseño web profesional pensado para emprendedores y
            empresas que buscan una presencia online impactante y efectiva.
            Diseñaré un sitio web responsivo, optimizado para SEO y con una
            estética única que refleje la identidad de tu marca. Ya sea una
            tienda online, un blog o un sitio corporativo, me encargaré de que
            tu plataforma no solo luzca bien, sino que también convierta visitas
            en clientes.
          </p>

          <CalendlyButton />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          {" "}
          <div className="text-[27px] font-bold mt-10">
            Estrategias De Marketing Digital
          </div>
          <p className="grid-subtext text-justify">
            Servicio integral de estrategias de marketing digital diseñado para
            emprendedores y empresas que buscan aumentar su visibilidad y captar
            clientes en línea. Desarrollaré una estrategia personalizada que
            incluye gestión de redes sociales, campañas de publicidad digital,
            optimización SEO y contenido relevante para conectar efectivamente
            con tu audiencia. Ya sea para mejorar el posicionamiento de tu
            marca, aumentar las conversiones o fidelizar a tus clientes, me
            aseguraré de que tu presencia digital impulse resultados reales y
            sostenibles.
          </p>
          <CalendlyButton />
        </div>

        <img src={MyIcon} alt="MyIcon" className="w-[400px] hidden md:block" />
      </div>
    </div>
  );
};

export default Servicios;
