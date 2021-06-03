import Layout from "../components/Layout";
import Header from "../components/Header";
import Card from "../components/Card";
import { Skills, Experiences, Projects } from "../profile";

export default function Index() {
  return (
    <Layout>
      {/*Header card */}
      <Header
        img="foto.png"
        name="Diego Bolaños"
        description="Soy un ingeniero multimedia egresado de la una universidad autónoma de occidente, durante mi época de estudiante me llego a interesar mucho las tecnologías web como son HTML, CSS y JavaScript de lado de cliente y herramientas como Node JS del lado del servidor, esto unido a la creación de contenidos interactivos, me a motivado a continuar con la continua búsqueda de tecnologías para lograr los retos que se me proponen, por lo que e llegado a ser una persona adaptable, permitiendo moverme entre herramientas con una buena base lógica."
        position="Web Developer"
      />
      {/*Second section */}
      <div className="row py-2 ">
        <div className="col-md-4">
          <div className="card bg-light" style={{ height: "100%" }}>
            <div className="card-body">
              <h1>Habilidades</h1>
              {Skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      roles="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Estudios</h1>
              <ul>
                {Experiences.map(({ title, start, end, description }, i) => (
                  <li key={i}>
                    <h3>{title}</h3>
                    <h5>
                      {start} - {end}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <h1 className="text-center text-light">Proyectos destacados</h1>

              {Projects.map(({ name, description, image, demo, github }, i) => (
                <Card
                  key={i}
                  name={name}
                  description={description}
                  image={image}
                  demo={demo}
                  github={github}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
