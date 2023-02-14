import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { facebook, instagram, twitter, mail, twitch, logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="container section-pt section-pb">
      <div className="row gap-2 gap-md-0">
        <div className="d-flex flex-column col-md-3 gap-2">
          <p className="fw-bold fs-6">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
          <p className="fw-bold fs-6">binarcarrental@gmail.com</p>
          <p className="fw-bold fs-6">081-233-334-808</p>
        </div>
        <div className="d-flex flex-column col-md-2 offset-md-1 gap-2">
          <p>
            <HashLink to="/#services" className="text-decoration-none text-black">
              Our Services
            </HashLink>
          </p>
          <p>
            <HashLink to="/#whyus" className="text-decoration-none text-black">
              Why Us
            </HashLink>
          </p>
          <p>
            <HashLink to="/#testimonial" className="text-decoration-none text-black">
              Testimonial
            </HashLink>
          </p>
          <p>
            <HashLink to="/#faq" className="text-decoration-none text-black">
              FAQ
            </HashLink>
          </p>
        </div>
        <div className="col-md-2 offset-md-1">
          <p className="fw-bold">Connect with us</p>
          <div className="d-flex gap-3 mt-2 mt-md-3">
            <button className="border-0 bg-transparent cursor-pointer">
              <img src={facebook} alt="facebook" />
            </button>
            <button className="border-0 bg-transparent cursor-pointer">
              <img src={instagram} alt="instagram" />
            </button>
            <button className="border-0 bg-transparent cursor-pointer">
              <img src={twitter} alt="twitter" />
            </button>
            <button className="border-0 bg-transparent cursor-pointer">
              <img src={mail} alt="mail" />
            </button>
            <button className="border-0 bg-transparent cursor-pointer">
              <img src={twitch} alt="twitch" />
            </button>
          </div>
        </div>
        <div className="col-md-2 offset-md-1">
          <p className="fw-bold">Copyright Binar 2022</p>
          <Link to="/">
            <img src={logo} alt="logo" className="mt-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
