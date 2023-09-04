import "../App.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="name" href="#">
            Gurjot Singh
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav nav-items-links">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Skills
              </a>
              <a className="nav-link" href="#">
                Certificates
              </a>
              <a className="nav-link" href="#">
                Projects
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
