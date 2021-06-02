import Layout from "../components/Layout";

export default function _error({ statusCode }) {
  return (
    <Layout>
      <div className="text-center">
        <h1>ERROR {statusCode}</h1>
        <p className="text-center">
          No se pudo cargar la pagina compruebe la red
        </p>
      </div>
    </Layout>
  );
}
