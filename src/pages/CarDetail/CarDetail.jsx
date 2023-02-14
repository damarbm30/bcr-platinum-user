import { useParams } from "react-router-dom";
import { users } from "../../assets";

import { Header, Search } from "../../components";

const CarDetail = ({ cars, setCars, isFiltered }) => {
  const { carId } = useParams();

  const car = cars.find((car) => car.id.toString() === carId);
  const { name, price, category, image } = car;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);
  let peopleCap;

  switch (category) {
    case "small":
      peopleCap = "2 - 4 orang";
      break;
    case "Medium":
      peopleCap = "4-6 orang";
      break;
    case "large":
      peopleCap = "6-8 orang";
      break;
  }

  return (
    <>
      <Header isFiltered={isFiltered} />
      <Search setCars={setCars} isDetail />
      <main>
        <div className="container d-flex justify-content-center">
          <div className="row justify-content-center g-3" style={{ width: "93.33%" }}>
            <div className="col-md-4 order-md-2">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img src={image} alt={name} className="img-fluid mb-1 rounded" />
                  <div>
                    <p className="fw-bold mb-1">{name}</p>
                    <div className="d-flex gap-1" style={{ marginBottom: "3.4375rem" }}>
                      <img src={users} alt="users" />
                      <p className="fw-bold text-secondary" style={{ fontSize: "0.625rem" }}>
                        {peopleCap}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <p>Total</p>
                    <span>{formattedPrice}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 order-md-1">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="fw-bold mb-3">Tentang Paket</p>
                  <p className="fw-bold mb-3">Include</p>
                  <ul className="text-secondary fw-bold" style={{ fontSize: "0.875rem" }}>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p className="fw-bold mb-3">Exclude</p>
                  <ul className="text-secondary fw-bold" style={{ fontSize: "0.875rem" }}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <p className="fw-bold mb-3">Refund, Reschedule, Overtime</p>
                  <ul className="text-secondary fw-bold" style={{ fontSize: "0.875rem" }}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
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
