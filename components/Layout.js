import Navbar from "./NavBar";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";
import ClassNames from "classnames";
export default function Layout({
  children,
  footer = true,
  dark = false,
  title,
}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      Nprogress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => {
      Nprogress.done();
    });
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div className={ClassNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4 ">
        {title && (
          <h1 className={ClassNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Diego Bolaños Portafolio</h1>
            <p> 2020 - {new Date().getFullYear()}</p>
            <p>Todos los derechos reservados</p>
          </div>
        </footer>
      )}
    </div>
  );
}
