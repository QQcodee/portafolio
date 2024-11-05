import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Enrique Castañeda
          </a>
          <button
            className="text-neutral-400 focus:outline-none sm:hidden flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="material-icons w-6 h-6 text-neutral-400 hover:text-white transition-colors">
              {isOpen ? "close" : "menu"}
            </i>
          </button>

          <nav className={`sm:flex hidden`}>
            <ul className="nav-ul">
              <li className="nav-li">
                <a className="nav-li_a" href="/#inicio">
                  Inicio
                </a>
              </li>

              <li className="nav-li">
                <a className="nav-li_a" href="/#about">
                  Sobre Mi
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-li_a" href="/#servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-li_a" href="/#projectos">
                  Projectos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} `}>
        <nav className={`p-5`}>
          <ul className="nav-ul">
            <li className="nav-li">
              <a
                onClick={() => setIsOpen(!isOpen)}
                className="nav-li_a"
                href="/#inicio"
              >
                Inicio
              </a>
            </li>

            <li className="nav-li">
              <a
                onClick={() => setIsOpen(!isOpen)}
                className="nav-li_a"
                href="/#about"
              >
                Sobre Mi
              </a>
            </li>
            <li className="nav-li">
              <a
                onClick={() => setIsOpen(!isOpen)}
                className="nav-li_a"
                href="/#servicios"
              >
                Servicios
              </a>
            </li>
            <li className="nav-li">
              <a
                onClick={() => setIsOpen(!isOpen)}
                className="nav-li_a"
                href="/#projectos"
              >
                Projectos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
