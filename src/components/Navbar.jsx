import { Link } from "react-router-dom";

function Navbar(){

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <div className="container">
          <Link className="logo navbar-brand" to="/">Mehdi Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
         
            </ul>


          </div>
        </div>
      </nav>
    )
}

export default Navbar;