import React, { useState } from "react";
import { upload_gambar } from "../../assets";
import { isEmpty } from "lodash";

const KonfirmasiPembayaran = ({ handleNextNext }) => {
  const handleNextOke = handleNextNext;

  const [image, setImage] = useState(null);

  const [activeStepUpload, setActiveStepUpload] = useState(0);
  const [skippedStepsUpload, setSkippedStepsUpload] = useState([]);

  const handleNextUpload = () => {
    setActiveStepUpload(activeStepUpload + 1);
    setSkippedStepsUpload(
      skippedStepsUpload.filter((skipItem) => skipItem !== activeStepUpload)
    );
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="card konfirmasi-pembayaran">
              <form
                onClick={() => document.querySelector(".input-field").click()}
              >
                <input
                  type="file"
                  className="input-field"
                  onChange={({ target: { files } }) => {
                    files[0];
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                  accept="image/*"
                  hidden
                />
                {image ? (
                  <img src={image} alt="image" />
                ) : (
                  <img src={upload_gambar} alt="upload_gambar" />
                )}
              </form>
              <button
                role="button"
                type="submit"
                className="tombol-bayar"
                disabled={isEmpty(image)}
                onClick={handleNextUpload}
              >
                Upload
              </button>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="card konfirmasi-pembayaran">
              <img src={image} alt="image" />
              <button
                role="button"
                type="submit"
                className="tombol-bayar"
                onClick={handleNextOke}
              >
                Konfirmasi
              </button>
            </div>
          </>
        );
      default:
        return "unknown step";
    }
  }

  return (
    <>
      <div>{getStepContent(activeStepUpload)}</div>
    </>
  );
};

export default KonfirmasiPembayaran;
