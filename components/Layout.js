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
    <div
      id="my-layout"
      className={`${ClassNames({ "bg-dark": dark, "bg-light": !dark })}`}
    >
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
          <div className="container p-4 d-flex flex-column align-items-center ">
            <h1>&copy; Diego Bolaños Portafolio</h1>
            <p> 2020 - {new Date().getFullYear()}</p>
            <div
              className="d-flex justify-content-around"
              style={{ maxWidth: "500px", minWidth: "350px" }}
            >
              <p
                className="d-flex justify-content-around "
                style={{ maxWidth: "190px", minWidth: "125px" }}
              >
                <img style={{ maxHeight: "1.3rem" }} src="images/call.svg" />
                {"  "}
                316-531-0636
              </p>
              <p
                className="d-flex justify-content-around "
                style={{ maxWidth: "200px", minWidth: "185px" }}
              >
                <img style={{ maxHeight: "1.3rem" }} src="images/email.svg" />
                {"  "}
                bolanosd39@gmail.com
              </p>
            </div>

            <p>Todos los derechos reservados</p>
          </div>
        </footer>
      )}
    </div>
  );
}
