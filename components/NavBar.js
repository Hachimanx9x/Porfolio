import Link from "next/link";
import { useState } from "react";
export default function NavBar() {
  const [avtMenu, setActMenu] = useState(false);

  const hamburger_menu = () => {
    setActMenu(!avtMenu);
  };

  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Inicio</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={hamburger_menu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${!avtMenu ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav o-margin-left-auto">
              <li className="nav-item active">
                <Link href="/Blog">
                  <a className="nav-link">Proyectos</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Github">
                  <a className="nav-link">Contactame</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .o-margin-left-auto {
          margin-left: auto;
        }

        @media screen and (max-width: 960px) {
          .o-margin-left-auto {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
