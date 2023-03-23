import React, { useEffect, useState } from "react";
import {
  panahsampingpembayaran,
  users,
  panah_keatas_total,
  green_checklist,
} from "../../assets";
import "./Order.css";
import { isEmpty } from "lodash";
import moment from "moment/moment";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Tiket from "./Tiket";
import StepKonfirmasiPembayaran from "./StepKonfirmasiPembayaran";
import StepPilihMetodeBayar from "./StepPilihMetodeBayar";
import { v4 as uuidv4 } from "uuid";
import useCar from "../../store/Data";
import usePayment from "../../store/Pembayaran";

const uniqueId = uuidv4();
const BCA_TRANSFER = "BCA";
const BNI_TRANSFER = "BNI";
const MANDIRI_TRANSFER = "MANDIRI";

const Order = () => {
  const currentCar = useCar((state) => state.currentCar);
  const PaymentAwal = usePayment((state) => state.startRent);
  const PaymentAkhir = usePayment((state) => state.lastRent);

  // const category = JSON.stringify(currentCar.category);
  let peopleCap;
  // console.log(peopleCap);

  switch (currentCar.category.toLowerCase()) {
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

  const [metodePembayaran, setMetodePembayaran] = useState(null);
  // console.log("metode pembayaran", metodePembayaran);
  const [awalSewa, setAwalSewa] = useState(null); //data from zustand
  const [akhirSewa, setAkhirSewa] = useState(null); //data from zustand
  const [postCarDate, setPostCarDate] = useState([]); //data from post API
  let jumlahHari = moment(akhirSewa).diff(moment(awalSewa), "days"); //data from zustand
  const orderIdPut = JSON.stringify(postCarDate.id);

  const awSew =
    new Date(PaymentAwal) && moment(new Date(PaymentAwal)).format("YYYY-MM-D");
  const akSew =
    new Date(PaymentAkhir) &&
    moment(new Date(PaymentAkhir)).format("YYYY-MM-D");
  const data = {
    start_rent_at: awSew,
    finish_rent_at: akSew,
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
      })
      .catch((error) => console.error(error));
  }

  const [hargaTotal, setHargaTotal] = useState();
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const formattedPrice = formatter.format(postCarDate.total_price);
  const formattedPriceSatuan = formatter.format(currentCar.price);
  console.log(hargaTotal);

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [slipData, setSlipData] = useState(null);
  console.log(slipData);

  const handleSaveSlipData = (data) => {
    setSlipData(data);
  };

  useEffect(() => {
    setAwalSewa(new Date(PaymentAwal));
    setAkhirSewa(new Date(PaymentAkhir));
    setHargaTotal(formattedPrice);
    postDate();
  }, []);

  function getSteps() {
    return ["Pilih Metode", "Bayar", "Tiket"];
  }

  function getStepJudul(step) {
    switch (step) {
      case 0:
        return (
          <>
            <p>
              <strong>Pembayaran</strong>
            </p>
          </>
        );

      case 1:
        return (
          <>
            <p>
              <strong>{metodePembayaran} Transfer</strong>
            </p>
            <p>Order ID: {uniqueId.substring(0, 8)}</p>
          </>
        );
      case 2:
        return (
          <>
            <p>
              <strong>Tiket</strong>
            </p>
            <p>Order ID: XXXXXXXX</p>
          </>
        );
      default:
        return "unknown step";
    }
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
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
                    <p>
                      {akhirSewa && moment(akhirSewa).format("D MMMM YYYY")}
                    </p>
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
                  Kamu bisa membayar dengan transfer melalui ATM, Internet
                  Banking atau Mobile Banking
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
              <div className="card cara-pembayaran-right">
                <p>
                  <strong style={{ fontSize: 16 }}>{currentCar.name}</strong>
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
                  <p> {formattedPrice}</p>
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
                    <strong style={{ marginRight: 4 }}>Total</strong>
                    {formattedPrice}
                  </p>
                </div>
                <Button
                  role="button"
                  type="submit"
                  className="tombol-bayar"
                  disabled={isEmpty(metodePembayaran)}
                  variant="contained"
                  color="success"
                  onClick={handleNext}
                >
                  Bayar
                </Button>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="cara-pembayaran-tahap-2">
              <div className="cara-pembayaran-left-tahap-2">
                <StepPilihMetodeBayar
                  metodePembayaranfunction={metodePembayaran}
                  hargaTotalBayar={hargaTotal}
                />
              </div>
              <div className="cara-pembayaran-right-tahap-2">
                <StepKonfirmasiPembayaran
                  handleNextbutton={handleNext}
                  orderId={orderIdPut}
                  saveSlipData={handleSaveSlipData}
                />
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <Tiket slipData={slipData} />
          </>
        );
    }
  }

  return (
    <div className="page-pembayaran">
      <div className="form-pembayaran">
        <div className="step-pembayaran">
          <div className="step-pembayaran-left">
            <Button disabled={activeStep === 0} onClick={handleBack}>
              <img src={panahsampingpembayaran} alt="panahsampingpembayaran" />
            </Button>
            <strong>{getStepJudul(activeStep)}</strong>
          </div>
          <div className="step-pembayaran-right">
            <Stepper activeStep={activeStep}>
              {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                return (
                  <Step {...stepProps} key={index}>
                    <StepLabel {...labelProps}>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        </div>
      </div>
      <div>{getStepContent(activeStep)}</div>
    </div>
  );
};

export default Order;
