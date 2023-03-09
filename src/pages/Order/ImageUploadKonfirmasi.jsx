import React, { useState } from "react";
import Button from "@mui/material/Button";
import { upload_gambar } from "../../assets";
import { isEmpty } from "lodash";

const KonfirmasiPembayaran = ({ handleNextNext }) => {
  // async function upload() {
  //   console.log(values);
  //   await fetch(
  //     "https://bootcamp-rent-cars.herokuapp.com/customer/order",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(values),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       navigate("/");
  //     });
  //   result = await result.json();

  //   console.warn("result", result);
  // }
  // const [values, setValues] = useState({
  //   start_rent_at: "2022-10-05",
  //   finish_rent_at: "2022-10-12",
  //   car_id: 1,
  // });

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
            <div className="upload-gambar-step">
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
                  <img src={image} alt="image" style={{ width: "296px" }} />
                ) : (
                  <img
                    src={upload_gambar}
                    alt="upload_gambar"
                    className="gambar-awal-upload"
                  />
                )}
              </form>
            </div>
            <Button
              style={{ width: "100%", marginTop: "24px" }}
              role="button"
              type="submit"
              variant="contained"
              color="success"
              disabled={isEmpty(image)}
              onClick={handleNextUpload}
              // onSubmit={upload}
            >
              Upload
            </Button>
          </>
        );
      case 1:
        return (
          <>
            <div className="upload-gambar-step">
              <img src={image} alt="image" style={{ width: "296px" }} />
            </div>
            <Button
              style={{ width: "100%", marginTop: "24px" }}
              role="button"
              type="submit"
              variant="contained"
              color="success"
              onClick={handleNextOke}
            >
              Konfirmasi
            </Button>
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
