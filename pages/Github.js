//import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Error from "./_error";
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Hachimanx9x");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}
export default function Github({ user, statusCode }) {
  let content = "";
  if (statusCode) {
    return (
      <Layout footer={false}>
        <Error statusCode={statusCode} />
      </Layout>
    );
  }
  return (
    <div className="o-contact">
      <Layout footer={false} dark={true} title="Conoceme">
        <div className="row o-contact">
          <div className="col-md-4 offset-md-4">
            <div className="card card-body text-center">
              <h1>{user.login}</h1>
              <img src={user.avatar_url} alt="foto_perfil" />
              <p>{user.bio}</p>
              {user.blog !== "" ? (
                <a
                  href={user.blog}
                  target="_blank"
                  className="btn btn-outline-secondary my-2"
                >
                  Mi blog
                </a>
              ) : (
                ""
              )}
              <a
                href={user.html_url}
                target="_blank"
                className="btn btn-outline-secondary my-2"
              >
                Mi Github
              </a>
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .o-contact {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
/**
 */
//www.linkedin.com/in/diego-fernando-bolaños-palma-6a536720b
