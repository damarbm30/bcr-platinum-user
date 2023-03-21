import React, { useState } from "react";
import Timer10 from "./Timer10";
import ImageUploadKonfirmasi from "./ImageUploadKonfirmasi";
import Button from "@mui/material/Button";
import "./Order.css";

const CardKonfirmasiPembayaran = ({
  handleNextbutton,
  orderId,
  saveSlipData,
}) => {
  const handleNext = handleNextbutton;
  const orderIdPut = orderId;

  const [activeStepKonfirmasi, setActiveStepKonfirmasi] = useState(0);
  const [skippedStepsKonfirmasi, setSkippedStepsKonfirmasi] = useState([]);

  const handleNextKonfirmasi = () => {
    setActiveStepKonfirmasi(activeStepKonfirmasi + 1);
    setSkippedStepsKonfirmasi(
      skippedStepsKonfirmasi.filter(
        (skipItem) => skipItem !== activeStepKonfirmasi
      )
    );
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="card konfirmasi-pembayaran-pertama">
              <p>
                Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
              </p>
              <Button
                role="button"
                type="submit"
                className="tombol-bayar"
                variant="contained"
                color="success"
                onClick={handleNextKonfirmasi}
              >
                Konfirmasi Pembayaran
              </Button>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="card konfirmasi-pembayaran-kedua">
              <div className="menu-count-10menit">
                <strong>Konfirmasi Pembayaran</strong>

                <div className="timer10">
                  <Timer10 duration={10 * 60 * 1000} />
                </div>
              </div>
              <div className="keterangan-upload">
                <p className="p1">
                  Terima kasih telah melakukan konfirmasi pembayaran.
                  Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit
                  untuk mendapatkan konfirmasi.
                </p>
                <p className="p2">Upload Bukti Pembayaran</p>
                <p className="p3">
                  Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                  bisa upload bukti bayarmu
                </p>
              </div>
              <div className="upload-gambar">
                <ImageUploadKonfirmasi
                  handleNextNext={handleNext}
                  orderId={orderIdPut}
                  saveSlipData={saveSlipData}
                />
              </div>
            </div>
          </>
        );
    }
  }

  return <div>{getStepContent(activeStepKonfirmasi)}</div>;
};

export default CardKonfirmasiPembayaran;
