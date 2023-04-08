import React, { useEffect, useState } from "react";
import { users, panah_keatas_total } from "~/assets";
import "../Order.css";
import { isEmpty } from "lodash";
import moment from "moment/moment";
import Button from "@mui/material/Button";
import useCar from "~/store/Data";
import usePayment from "~/store/Pembayaran";
import { getCategory } from "~/utils/global";
import { formatter } from "~/utils/global";

const Step12DetailPesanan = (props) => {
  const { metodePembayaran, handleNextbutton, displayTotalPrice, postCarDate } =
    props;
  console.log(props);
  const currentCar = useCar((state) => state.currentCar);
  const PaymentAwal = usePayment((state) => state.startRent);
  const PaymentAkhir = usePayment((state) => state.lastRent);

  let peopleCap = getCategory(currentCar.category.toLowerCase());

  // console.log("metode pembayaran step12", displayMetodePembayaran);
  const [awalSewa, setAwalSewa] = useState(null); //data from zustand
  const [akhirSewa, setAkhirSewa] = useState(null); //data from zustand
  let jumlahHari = moment(akhirSewa).diff(moment(awalSewa), "days"); //data from zustand
  //   const orderIdPut = JSON.stringify(postCarDate.id);

  const formattedPriceSatuan = formatter.format(currentCar.price);

  useEffect(() => {
    setAwalSewa(new Date(PaymentAwal));
    setAkhirSewa(new Date(PaymentAkhir));
  }, []);

  return (
    <>
      <div className="card cara-pembayaran-right">
        <p>
          <strong>{currentCar.name}</strong>
        </p>
        <p>
          <img src={users} alt="users" /> {peopleCap}
        </p>
        <div className="pembayaran-collaps-atas">
          <p>
            <a
              data-bs-toggle="collapse"
              href="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Total
              <img src={panah_keatas_total} alt="panah_keatas_total" />
            </a>
          </p>
          <p> {displayTotalPrice}</p>
        </div>
        <div className="collapse" id="collapseExample">
          <p>
            <strong>Harga</strong>
          </p>
          <ul>
            <li>
              Sewa Mobil {formattedPriceSatuan} x {jumlahHari + 1} Hari
            </li>
          </ul>
          <p>
            <strong>Biaya Lainnya</strong>
          </p>
          <ul>
            <li>Pajak</li>
            <li>Biaya makan sopir</li>
          </ul>
          <p>
            <strong>Belum Termasuk</strong>
          </p>
          <ul>
            <li>Bensin</li>
            <li>Tol dan parkir</li>
          </ul>
          <p>
            <strong>Total</strong>
            {displayTotalPrice}
          </p>
        </div>
        <Button
          role="button"
          type="submit"
          className="tombol-bayar"
          disabled={isEmpty(metodePembayaran)}
          variant="contained"
          color="success"
          onClick={handleNextbutton}
        >
          Bayar
        </Button>
      </div>
    </>
  );
};

export default Step12DetailPesanan;
