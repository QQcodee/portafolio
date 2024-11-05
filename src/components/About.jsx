import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";
import CalendlyButton from "./CalendlyButton.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("enrique.cb628@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hola, soy Enrique</p>
              <p className="grid-subtext">
                Soy Enrique Castañeda, y me dedico al diseño web profesional, la
                creación de contenido digital, las estrategias de marketing
                digital, y la consultoría SEO para ayudarte a destacarte en el
                mundo digital.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Diseño Web Estratégico</p>
              <p className="grid-subtext">
                Me especializo en crear paginas web para negocios, eventos, etc.
                Mi enfoque es claro: diseñar y desarrollar sitios web
                optimizados para atraer nuevos clientes. Y potenciarlos con
                estrategias de marketing digital.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Rjieka, Croatia",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Con clientes satisfechos en todo el mundo
              </p>
              <p className="grid-subtext">Ubicado en Chihuahua, Mexico.</p>

              <CalendlyButton />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Sobre mi</p>
              <p className="grid-subtext">
                Me apasiona resolver problemas y construir cosas a través de
                código. La programación no solo es mi profesión, es mi pasión.
                Me encanta explorar nuevas tecnologías y mejorar mis habilidades
                para darte los mejores resultados. Mi enfoque es crear
                soluciones personalizadas que se adapten a las necesidades de
                cada negocio, asegurando que tu marca alcance su máximo
                potencial online.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contactame</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p
                  id="servicios"
                  className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"
                >
                  enrique.cb628@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/*

<section className="c-space my-20">
  <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img
          src="/assets/grid1.png"
          alt="grid-1"
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext">Hola, soy Enrique</p>
          <p className="grid-subtext">
            Me enfoco en ayudarte a crear la pagina web que necesitas. Desde
            soluciones especificas para eficientar tu negocio hasta landing
            pages para tus negocios, invitaciones virtuales, etc.
          </p>
        </div>
      </div>
    </div>
    <div className="col-span-1 xl:row-span-3 ">
      <div className="grid-container">
        <img
          src="assets/grid2.png"
          alt="grid-2"
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext">Tecnologias utilizadas</p>
          <p className="grid-subtext">
            React JS, Next JS, Tailwind CSS, Framer motion, Three JS,
          </p>
        </div>
      </div>
    </div>
    <div className="col-span-1 xl:row-span-4">
      <div className="grid-container">
        <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center bg-black-200">
          <Globe
            height={326}
            width={326}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[
              {
                lat: 29,
                lng: -105,
                text: "Aqui estoy",

                color: "white",
                size: 50,
              },
            ]}
          />
        </div>
        <p className="grid-headtext">
          Con clientes satisfechos en todo el mundo
        </p>
        <p className="grid-subtext">Ubicados en Chihuahua, Mexico.</p>
        <Button name="Contacto" isBeam containerClass="w-full mt-10" />
      </div>
    </div>
    <div className="xl:col-span-2 xl:row-span-3 ">
      <div className="grid-container">
        <img
          src="assets/grid3.png"
          alt="grid-3"
          className="w-full sm:h-[266px] h-fit object-contain"
        />
        <p className="grid-headtext">Diseño y creacion de landing pages</p>
        <p className="grid-subtext">
          Creo landing pages para tus negocios, eventos, etc.
        </p>
      </div>
    </div>
    <div className="xl:col-span-1 xl:row-span-2 ">
      <div className="grid-container">
        <img
          src="assets/grid4.png"
          alt="grid-4"
          className="w-full md:h-[150px] sm:h-[276px] h-fit object-cover sm:object-top"
        />
        <div className="space-y-2">
          <p className="grid-headtext">Diseño y creacion de landing pages</p>
          <p className="grid-subtext">
            Creo landing pages para tus negocios, eventos, etc.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>;


*/
