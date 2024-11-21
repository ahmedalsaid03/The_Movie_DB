import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
      <Link className="navbar-brand" to="movies">Noxe</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tvshow">Tvshow</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="test">Test For Redux</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="movie">Movie</Link>
        </li> */}
      </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
