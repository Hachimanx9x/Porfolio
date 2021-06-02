export default function Header({ img, name, description, position }) {
  return (
    <header className="row">
      <div className="col-md-12 ">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <img className="img-fluid" src={`/images/${img}`} alt="foto" />
            </div>
            <div className="col-md-8">
              <h1>{name}</h1>
              <h3>{position}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
