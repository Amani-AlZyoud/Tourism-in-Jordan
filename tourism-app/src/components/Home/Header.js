import React from 'react'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <>
   <div className="bg-image">
  <div className="container-fluid">
    {/* HEADER SECTION */}
    <header>
      <div className="row">
        <nav className="navbar navbar-expand-lg" id="nav-edit-color">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" id="logo">
              <img src={logo} alt="LOGO" width={200} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              id="h-menu"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#"
                    id="nav-edit"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="nav-edit">
                    Places
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="nav-edit">
                    Visitors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="nav-edit">
                    Hotels
                  </a>
                </li>
              </ul>
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button type="button" className="btn btn-light">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* HERO SECTION */}
    <div className="row text-center" id="hero">
      <h1 className="fw-bold  display-1">
       WELCOME TO <span style={{color: "#FFE9B1"}}>JO-TRAVELERS</span>
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 fs-2 fw-bold" id='hero-text'>Where adventure meets relaxation and culture meets nature</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            className="btn btn-lg  px-4 me-sm-3"
            id="hero-btn"
          >
            BOOK NOW!
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Header