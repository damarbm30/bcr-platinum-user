import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { logo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3 shadow-md-sm">
      <div className="container-fluid justify-content-start-md">
        <Link to="/" className="navbar-brand d-none d-sm-block offset-md-1">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="navbar-brand offset-md-1 fw-bold d-block d-sm-none">
          BCR
        </Link>
        <button
          className="navbar-toggler offset-sm-8 offset-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav offset-lg-8">
            <li className="nav-item">
              <HashLink className="nav-link text-black" to="/#services">
                Our Services
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-black" to="/#whyus">
                Why Us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-black" to="/#testimonial">
                Testimonial
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link text-black" to="/#faq">
                FAQ
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
