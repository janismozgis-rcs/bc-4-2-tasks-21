import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Catland</a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/article" className="nav-link">Article</Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="nav-link">Tags</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header;