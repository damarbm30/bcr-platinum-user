import { useParams } from "react-router-dom";
import { users } from "~/assets";
import Picker from "./DatePicker/Picker";
import { Header, Search, Navbar } from "~/components";
import { useState } from "react";
import usePayment from "~/store/Pembayaran";
import useCar from "~/store/Data";
import { useNavigate } from "react-router-dom";
import { getCategory } from "~/utils/global";
import { formatter } from "~/utils/global";

const CarDetail = ({ cars, setCars, isFiltered }) => {
  const navigate = useNavigate();
  const { carId } = useParams();

  const car = cars.find((car) => car.id.toString() === carId);
  const { name, price, category, image } = car;
  const setCurrentCar = useCar((state) => state.setCurrentCar);
  setCurrentCar({ car: car });
  const currentCar = useCar((state) => state.currentCar);
  console.log(currentCar);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const setCarRent = usePayment((state) => state.setCarRent);

  const handleChangeStart = (newValue) => {
    console.log(new Date(newValue));
    setStart(new Date(newValue));
    console.log(start);
  };

  const handleChangeEnd = (newValue) => {
    setEnd(new Date(newValue));
    console.log(end);
  };

  const handleSubmit = () => {
    setCarRent({ start: start, last: end });
    navigate("/order");
    console.log(start.$y, start.$M, start.$D);
    console.log(end.$y, end.$M, end.$D);
  };

  const formattedPrice = formatter.format(price);
  const peopleCap = getCategory(category.toLowerCase());

  return (
    <>
      <Header isFiltered={isFiltered} />
      <Search setCars={setCars} isDetail />
      <main>
        <div className="container d-flex justify-content-center">
          <div
            className="row justify-content-center g-3"
            style={{ width: "93.33%" }}
          >
            <div className="col-md-4 order-md-2">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img
                    src={image}
                    alt={name}
                    className="img-fluid mb-1 rounded"
                  />
                  <div>
                    <p className="fw-bold mb-1">{name}</p>
                    <div
                      className="d-flex gap-1"
                      style={{ marginBottom: "3.4375rem" }}
                    >
                      <img src={users} alt="users" />
                      <p
                        className="fw-bold text-secondary"
                        style={{ fontSize: "0.625rem" }}
                      >
                        {peopleCap}
                      </p>
                    </div>
                  </div>
                  <div className="div">
                    <Picker
                      start={start}
                      end={end}
                      onChangeStart={handleChangeStart}
                      onChangeEnd={handleChangeEnd}
                    />
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <p>Total</p>
                    <span>{formattedPrice}</span>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-success"
                      type="button"
                      disabled={!start || !end}
                      onClick={() => handleSubmit()}
                    >
                      Lanjutkan Pembayaran
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 order-md-1">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="fw-bold mb-3">Tentang Paket</p>
                  <p className="fw-bold mb-3">Include</p>
                  <ul
                    className="text-secondary fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p className="fw-bold mb-3">Exclude</p>
                  <ul
                    className="text-secondary fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <p className="fw-bold mb-3">Refund, Reschedule, Overtime</p>
                  <ul
                    className="text-secondary fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default CarDetail;
