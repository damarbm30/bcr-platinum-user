import React, { useContext, useEffect, useState } from "react";
import { users, green_checklist } from "~/assets";
import "../Order.css";
import moment from "moment/moment";
import useCar from "~/store/Data";
import usePayment from "~/store/Pembayaran";
import Step12DetailPesanan from "./Step12DetailPesanan";
import { getCategory } from "~/utils/global";
import { formatter } from "~/utils/global";
import { PaymentContext } from "~/contexts/PaymentProvider";

const Step11PilihBank = ({
  metodeBayar,
  totalPrice,
  saveIdPutAPI,
  handleNextbutton,
}) => {
  const { BCA_TRANSFER, BNI_TRANSFER, MANDIRI_TRANSFER } =
    useContext(PaymentContext);

  const currentCar = useCar((state) => state.currentCar);
  const PaymentAwal = usePayment((state) => state.startRent);
  const PaymentAkhir = usePayment((state) => state.lastRent);

  let peopleCap = getCategory(currentCar.category.toLowerCase());

  const [metodePembayaran, setMetodePembayaran] = useState(null);
  console.log("metode pembayaran", metodePembayaran);
  metodeBayar(metodePembayaran);
  const [awalSewa, setAwalSewa] = useState(null); //data from zustand
  const [akhirSewa, setAkhirSewa] = useState(null); //data from zustand
  const [postCarDate, setPostCarDate] = useState([]); //data from post API
  const [hargaTotal, setHargaTotal] = useState(); //data from post API
  totalPrice(hargaTotal);
  // const saveIdPutAPI = JSON.stringify(postCarDate.id);

  const beginDatePostAPI =
    new Date(PaymentAwal) && moment(new Date(PaymentAwal)).format("YYYY-MM-D");
  const endDatePostAPI =
    new Date(PaymentAkhir) &&
    moment(new Date(PaymentAkhir)).format("YYYY-MM-D");
  const data = {
    start_rent_at: beginDatePostAPI,
    finish_rent_at: endDatePostAPI,
    car_id: JSON.stringify(currentCar.id),
  };
  async function postDate() {
    console.log(data);
    await fetch("https://bootcamp-rent-cars.herokuapp.com/customer/order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostCarDate(data);
        saveIdPutAPI(JSON.stringify(data.id));
        setHargaTotal(formatter.format(data.total_price));
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    setAwalSewa(new Date(PaymentAwal));
    setAkhirSewa(new Date(PaymentAkhir));
    postDate();
  }, []);

  return (
    <>
      <div className="detail-pesananmu-bayar">
        <div className="card detail-order-car">
          <div className="judul-detail-pesanan">
            <p>
              <strong>Detail Pesananmu</strong>
            </p>
          </div>
          <div className="deskripsi-order">
            <div className="detail-deskripsi">
              <p>Nama/Tipe Mobil</p>
              <p>{currentCar.name}</p>
            </div>
            <div className="detail-deskripsi">
              <p>Kategori</p>
              <img src={users} alt="users" /> {peopleCap}
            </div>
            <div className="detail-deskripsi">
              <p>Tanggal Mulai Sewa</p>
              <p>{awalSewa && moment(awalSewa).format("D MMMM YYYY")}</p>
            </div>
            <div className="detail-deskripsi">
              <p>Tanggal Akhir Sewa</p>
              <p>{akhirSewa && moment(akhirSewa).format("D MMMM YYYY")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cara-pembayaran">
        <div className="card cara-pembayaran-left">
          <p>
            <strong>Pilih Bank Transfer</strong>
          </p>
          <p>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </p>
          <div className="menu-transfer-atm">
            <div
              className="pilihan-atm"
              onClick={() => setMetodePembayaran(BCA_TRANSFER)}
            >
              <div className="tombol-nama-atm">
                <label htmlFor="BCA">
                  <button
                    role="button"
                    type="submit"
                    className="tombol-pilih-atm"
                  >
                    BCA
                  </button>
                </label>
                <p>BCA Transfer</p>
              </div>
              {metodePembayaran === BCA_TRANSFER && (
                <img src={green_checklist} alt="green_checklist" />
              )}
            </div>
            <div
              className="pilihan-atm"
              onClick={() => setMetodePembayaran(BNI_TRANSFER)}
            >
              <div className="tombol-nama-atm">
                <label htmlFor="BNI">
                  <button
                    role="button"
                    type="submit"
                    className="tombol-pilih-atm"
                  >
                    BNI
                  </button>
                </label>
                <p>BNI Transfer</p>
              </div>
              {metodePembayaran === BNI_TRANSFER && (
                <img src={green_checklist} alt="green_checklist" />
              )}
            </div>
            <div
              className="pilihan-atm"
              onClick={() => setMetodePembayaran(MANDIRI_TRANSFER)}
            >
              <div className="tombol-nama-atm">
                <label htmlFor="MANDIRI">
                  <button
                    role="button"
                    type="submit"
                    className="tombol-pilih-atm"
                  >
                    MANDIRI
                  </button>
                </label>
                <p>MANDIRI Transfer</p>
              </div>
              {metodePembayaran === MANDIRI_TRANSFER && (
                <img src={green_checklist} alt="green_checklist" />
              )}
            </div>
          </div>
        </div>
        <Step12DetailPesanan
          postCarDate={postCarDate}
          metodePembayaran={metodePembayaran}
          handleNext={handleNextbutton}
          hargaTotal={hargaTotal}
        />
      </div>
    </>
  );
};

export default Step11PilihBank;
