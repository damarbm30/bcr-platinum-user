import React, { useState } from "react";
import Button from "@mui/material/Button";
import { upload_gambar } from "~/assets";
import { isEmpty } from "lodash";
// import useUpload from "../../store/Upload";
// const setUploadPic = useUpload((state) => state.setUploadPic);
// setUploadPic({ putCar: putCar });
// const uploadPic = useUpload((state) => state.uploadPic);
// console.log(uploadPic);

const KonfirmasiPembayaran = ({
  handleNextbutton,
  saveIdPutAPI,
  saveSlipData,
}) => {
  const [image, setImage] = useState(null);
  const [activeStepUpload, setActiveStepUpload] = useState(0);
  const [skippedStepsUpload, setSkippedStepsUpload] = useState([]);
  const [imageFiles, setImageFiles] = useState(null);
  const [putCar, setPutCar] = useState();

  async function upload() {
    const id = saveIdPutAPI;
    const url = `https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}/slip`;
    console.log(id);
    const file = imageFiles;
    const formData = new FormData();
    formData.append("slip", file);
    formData.append("type", "image/png");
    console.log(file);
    await fetch(url, {
      method: "PUT",
      headers: {
        accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
      body: formData,
    })
      .then((response) => response.json()) // convert response to JSON format
      .then((data) => {
        console.log(data);
        setPutCar(data);
        saveSlipData(data.slip);
      })
      .catch((error) => console.error(error));
  }

  console.log(putCar);

  const handleNextUpload = () => {
    setActiveStepUpload(activeStepUpload + 1);
    setSkippedStepsUpload(
      skippedStepsUpload.filter((skipItem) => skipItem !== activeStepUpload)
    );
  };

  function nextAndUpload() {
    handleNextUpload();
    upload();
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="upload-gambar-step">
              <form
                onClick={() => document.querySelector(".input-field").click()}
                // onSubmit={upload()}
              >
                <input
                  id="fileInput"
                  type="file"
                  className="input-field"
                  onChange={({ target: { files } }) => {
                    files[0];
                    setImageFiles(files[0]);
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                  accept="image/*"
                  hidden
                />
                {image ? (
                  <img src={image} alt="image" style={{ height: "162px" }} />
                ) : (
                  <img
                    src={upload_gambar}
                    alt="upload_gambar"
                    className="gambar-awal-upload"
                  />
                )}
              </form>
            </div>
            {/* <div>{carId}</div> */}
            <Button
              style={{ width: "100%", marginTop: "24px" }}
              role="button"
              type="submit"
              variant="contained"
              color="success"
              disabled={isEmpty(image)}
              onClick={nextAndUpload}
            >
              Upload
            </Button>
          </>
        );
      case 1:
        return (
          <>
            <div className="upload-gambar-step">
              <img src={image} alt="image" style={{ height: "162px" }} />
            </div>
            <Button
              style={{ width: "100%", marginTop: "24px" }}
              role="button"
              type="submit"
              variant="contained"
              color="success"
              onClick={handleNextbutton}
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
