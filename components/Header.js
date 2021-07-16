export default function Header({ img, name, description, position }) {
  return (
    <header className="row">
      <div className="col-md-12 ">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src={`/www.linkedin.com/in/diego-fernando-bolaños-palma-6a536720b/${img}`}
                alt="foto"
                style={{ maxHeight: "250px", minWidth: "125px" }}
              />
            </div>
            <div className="col-md-8">
              <h1>{name}</h1>
              <h3>{position}</h3>
              <p>{description}</p>
              <div
                className="d-flex justify-content-between"
                style={{ maxWidth: "350px", minWidth: "125px" }}
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
                  style={{ maxWidth: "200px", minWidth: "195px" }}
                >
                  <img style={{ maxHeight: "1.3rem" }} src="images/email.svg" />
                  {"  "}
                  bolanosd38@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
