import Layout from "../components/Layout";
import Link from "next/link";
export default function Error() {
  return (
    <Layout>
      <div className="text-center">
        <h1>404</h1>
        <p>
          Esta pagina no existe porfa vuelva al Inicio{" "}
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
