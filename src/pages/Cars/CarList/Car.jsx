import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

const Car = ({ id, name, price, image }) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="col-md-4 col-12">
      <div className="card">
        <div className="card-body d-flex flex-column gap-1">
          <div className="d-flex flex-column align-items-lg-center justify-content-center">
            {isLoading && <Skeleton className="skeleton" duration={0.5} />}
            <img
              src={image}
              alt={name}
              height={!isLoading ? 180 : 0}
              className="rounded"
              style={{ width: "90%", objectFit: "fill" }}
              onLoad={() => {
                setIsLoading(false);
              }}
            />
          </div>
          <p className="mt-4">{name}</p>
          <p className="fw-bold">{formattedPrice} / hari</p>
          <p className="fw-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to={`/car/${id}`} className="mt-3">
            <button
              className="btn btn-green w-100 text-white fw-bold"
              role="button"
            >
              Pilih Mobil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Car;
