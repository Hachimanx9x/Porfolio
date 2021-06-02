export default function Card({ name, description, image, demo, github }) {
  return (
    <div className="col-md-4 p-2">
      <div className="card h-100">
        <div className="o-overflow ">
          <img className="card-img-top" src={`/images/${image}`} alt="foto" />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h3>{name}</h3>
            <p> {description}</p>
          </div>

          <div>
            {demo === "" && github !== "" ? (
              <div className="d-flex justify-content-around">
                <a
                  href={github}
                  target="_black"
                  className="btn btn-outline-secondary  my-2"
                >
                  {" "}
                  Github
                </a>{" "}
              </div>
            ) : demo !== "" && github === "" ? (
              <div className="d-flex justify-content-around">
                <a
                  href={demo}
                  target="_black"
                  className="btn btn-outline-secondary  my-2"
                >
                  {" "}
                  Demo
                </a>
              </div>
            ) : demo !== "" && github !== "" ? (
              <div className="d-flex justify-content-around">
                <a
                  href={demo}
                  target="_black"
                  className="btn btn-outline-secondary  my-2"
                >
                  {" "}
                  Demo
                </a>{" "}
                <a
                  href={github}
                  target="_black"
                  className="btn btn-outline-secondary  my-2"
                >
                  {" "}
                  Github
                </a>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
