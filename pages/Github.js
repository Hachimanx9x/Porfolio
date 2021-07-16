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

function CardGithub({ user }) {
  return (
    <>
      <div className="col-md-4 o-card-c">
        <div className="card card-body text-center h-100">
          <div className="o-card">
            <div className="o-card__header">
              <h1>{user.login}</h1>
              <img className="o-img" src={user.avatar_url} alt="foto_perfil" />
            </div>
            <div className="o-card__info">
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
      </div>
      <style jsx>{`
        .o-card-c {
          height: 632px;
        }

        .o-img {
          height: 382px;
        }
        .o-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .o-card__info {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      `}</style>
    </>
  );
}
function CardMy() {
  return (
    <>
      <div className="col-md-4 o-card-c">
        <div className="card card-body text-center h-100">
          <div className="o-card">
            <div className="o-card__header">
              {" "}
              <h1>Diego Bolaños</h1>
              <img className="o-img" src="/images/foto.png" alt="foto_perfil" />
            </div>
            <div className="o-card__info">
              {" "}
              <p>Numero : +57 3165-5310636</p>
              <p>Correo : bolanosd38@gmail.com</p>
              <a
                href={
                  "https://www.linkedin.com/in/diego-fernando-bolaños-palma-6a536720b"
                }
                target="_blank"
                className="btn btn-outline-secondary my-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .o-card-c {
          height: 632px;
        }

        .o-img {
          height: 382px;
        }
        .o-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .o-card__info {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      `}</style>
    </>
  );
}
export default function Github({ user, statusCode }) {
  if (statusCode) {
    return (
      <Layout footer={false}>
        <Error statusCode={statusCode} />
      </Layout>
    );
  }
  return (
    <>
      <Layout footer={false} dark={true} title="Conoceme">
        <div className="row o-contact ">
          <CardGithub user={user} />
          <CardMy />
        </div>
      </Layout>
      <style jsx>{`
        .o-contact {
          height: 100vh;
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
}
/**
 */
//www.linkedin.com/in/diego-fernando-bolaños-palma-6a536720b
