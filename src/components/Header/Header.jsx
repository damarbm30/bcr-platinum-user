import "./Header.css";
import { car } from "../../assets";
import { Link } from "react-router-dom";

const Header = ({ isHome, isFiltered }) => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          {!isFiltered ? (
            <div className="row align-items-center justify-content-end">
              <div className="header__item col-12 col-md offset-1">
                <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
                <p className="col-9 mt-3 text-dark fw-bold">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                  Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {isHome && (
                  <Link to="/cars">
                    <button role="button" className="btn btn-green text-white fw-bold mt-3">
                      Mulai Sewa Mobil
                    </button>
                  </Link>
                )}
              </div>
              <img src={car} alt="car" className="col-12 col-md-6 header__img" />
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
