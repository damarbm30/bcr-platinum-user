import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="container section-pt">
      <div className="d-flex flex-column align-items-center bg-blue text-white cta">
        <h1 className="text-center fs-sm-3">Sewa Mobil di Yogyakarta Sekarang</h1>
        <p className="mt-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <Link to="/cars" className="d-flex justify-content-center text-reset text-decoration-none">
          <button role="button" className="btn btn-green text-white fw-bold mt-md-5 mt-3">
            Mulai Sewa Mobil
          </button>
        </Link>
      </div>
    </section>
  );
};
export default CTA;
