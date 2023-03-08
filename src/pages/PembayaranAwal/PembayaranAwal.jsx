import React, { useEffect, useState } from "react";
import {
  panahsampingpembayaran,
  users,
  panah_keatas_total,
  green_checklist,
} from "../../assets";
import "./PembayaranAwal.css";
import { isEmpty } from "lodash";
import moment from "moment/moment";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import StepKonfirmasiPembayaran from "./StepKonfirmasiPembayaran";
import StepPilihMetodeBayar from "./StepPilihMetodeBayar";

// pageorder

const BCA_TRANSFER = "BCA";
const BNI_TRANSFER = "BNI";
const MANDIRI_TRANSFER = "MANDIRI";

const PembayaranAwal = () => {
  const [metodePembayaran, setMetodePembayaran] = useState(null);
  const [awalSewa, setAwalSewa] = useState(null);
  const [akhirSewa, setAkhirSewa] = useState(null);

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

  const onChangePaymentMethod = (value) => {
    console.log(value);
  };

  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };
  useEffect(() => {
    setAwalSewa(new Date());
  }, []);
  console.log(akhirSewa);

  console.log("metode pembayaran", metodePembayaran);

  function getSteps() {
    return ["Pilih Metode", "Bayar", "Tiket"];
  }

  function getStepJudul(step) {
    switch (step) {
      case 0:
        return (
          <Typography>
            <strong>Pembayaran</strong>
          </Typography>
        );

      case 1:
        return (
          <Typography>
            <p>
              <strong>{metodePembayaran} Transfer</strong>
              <br></br>
              Order ID: 86754231
            </p>
          </Typography>
        );
      case 2:
        return (
          <Typography>
            <p>
              <strong>Tiket</strong>
              <br></br>
              Order ID: XXXXXXXX
            </p>
          </Typography>
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
            <div className="dis-search">
              <div className="card detail-order-car">
                <div className="judul-detail-pesanan">
                  <p>
                    <strong>Detail Pesananmu</strong>
                  </p>
                </div>
                <div className="deskripsi-order">
                  <div className="detail-deskripsi">
                    <p>Nama/Tipe Mobil</p>
                    <p>State Innova</p>
                  </div>
                  <div className="detail-deskripsi">
                    <p>Kategori</p>
                    <p>State 6 - 8 orang</p>
                  </div>
                  <div className="detail-deskripsi">
                    <p>Tanggal Mulai Sewa</p>
                    <p>{awalSewa && moment(awalSewa).format("D MMMM YYYY")}</p>
                  </div>
                  <div className="detail-deskripsi">
                    <p>Tanggal Akhir Sewa</p>
                    <p>
                      {moment(awalSewa).add(40, "days").format("D MMMM YYYY")}
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
                      <label for="BCA">
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
                      <label for="BNI">
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
                      <label for="MANDIRI">
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
                  <strong>Innova</strong>
                </p>
                <p>
                  <img src={users} alt="users" />
                  6-8 orang
                </p>
                <div className="pembayaran0102-left">
                  <p>
                    Total
                    <img src={panah_keatas_total} alt="panah_keatas_total" />
                  </p>
                </div>
                <div className="pembayaran0102-right">
                  <p>Rp. 3.500.000</p>
                </div>
                <p>
                  <strong>Harga</strong>
                </p>
                <ul>
                  <li>
                    Sewa Mobil Rp.500.000 x{" "}
                    {moment(awalSewa).diff(
                      moment(awalSewa).add(40, "days"),
                      "months"
                    )}
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
                  Rp. 3.500.000
                </p>
                <Button
                  role="button"
                  type="submit"
                  className="tombol-bayar"
                  disabled={isEmpty(metodePembayaran)}
                  variant="contained"
                  color="primary"
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
              <StepPilihMetodeBayar
                metodePembayaranfunction={metodePembayaran}
              />
              <StepKonfirmasiPembayaran handleNextbutton={handleNext} />
            </div>
          </>
        );
      case 2:
        <>Tiket</>;
      default:
        return "unknown step";
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
            <p>
              <strong>{getStepJudul(activeStep)}</strong>
            </p>
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

export default PembayaranAwal;
