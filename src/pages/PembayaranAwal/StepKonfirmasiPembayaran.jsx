import React, { useState } from "react";
import Timer10 from "./Timer10";
import ImageUploadKonfirmasi from "./ImageUploadKonfirmasi";

const KonfirmasiPembayaran = ({ handleNextbutton }) => {
  const handleNext = handleNextbutton;

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
            <div className="card konfirmasi-pembayaran">
              <p>
                Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
              </p>
              <button
                role="button"
                type="submit"
                className="tombol-bayar"
                onClick={handleNextKonfirmasi}
              >
                Konfirmasi Pembayaran
              </button>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="menu-count-10menit">
              <div className="menu-count-10menit-left">
                <p>
                  <strong>Konfirmasi Pembayaran</strong>
                </p>
              </div>
              <div className="menu-count-10menit-right">
                <p>
                  <Timer10 duration={10 * 60 * 1000} />
                </p>
              </div>
            </div>
            <div className="keterangan-upload">
              <p>
                Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
                akan segera kami cek tunggu kurang lebih 10 menit untuk
                mendapatkan konfirmasi.
              </p>
              <p>Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>
            </div>
            <div className="upload-gambar">
              <ImageUploadKonfirmasi handleNextNext={handleNext} />
            </div>
          </>
        );
      default:
        return "unknown step";
    }
  }

  return (
    <>
      <div>{getStepContent(activeStepKonfirmasi)}</div>
    </>
  );
};

export default KonfirmasiPembayaran;
