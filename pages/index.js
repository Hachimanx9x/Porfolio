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
        description={`Soy un ingeniero multimedia egresado de la universidad autónoma de occidente, apasionado por las tecnologías web, por lo cual mi trabajo y estudio individual siempre fue centrado en la creación se experiencias cómodas y agradables para cualquier persona que pudiera acceder a internet, como persona curiosas he buscado muchas maneras de lograr mis propósitos, adaptándome a muchas herramientas como lo son React JS, Vue JS, Node JS, Go o Python u otros para lograr el mejor resultado posible.`}
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
