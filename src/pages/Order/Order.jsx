import React, { useState } from "react";
import { panahsampingpembayaran } from "~/assets";
import "./Order.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Tiket from "./OrderStep3/Tiket";
import StepKonfirmasiPembayaran from "./OrderStep2/StepKonfirmasiPembayaran";
import StepPilihMetodeBayar from "./OrderStep2/StepPilihMetodeBayar";
import { v4 as uuidv4 } from "uuid";
import Step11PilihBank from "./OrderStep1/Step11PilihBank";
import PaymentProvider from "~/contexts/PaymentProvider";

const uniqueId = uuidv4();

const Order = () => {
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

  const [saveIdPutAPI, setSaveIdPutAPI] = useState(null);
  console.log(saveIdPutAPI);

  const handleSaveIdPutAPI = (data) => {
    setSaveIdPutAPI(data);
  };

  const [totalPrice, setTotalPrice] = useState(null);
  console.log(totalPrice);

  const handletotalPrice = (data) => {
    setTotalPrice(data);
  };

  const [metodeBayar, setMetodeBayar] = useState(null);
  console.log(metodeBayar);

  const handleMetodeBayar = (data) => {
    setMetodeBayar(data);
  };

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
              <strong>{metodeBayar} Transfer</strong>
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
            <Step11PilihBank
              saveIdPutAPI={handleSaveIdPutAPI}
              totalPrice={handletotalPrice}
              metodeBayar={handleMetodeBayar}
              handleNextbutton={handleNext}
            />
          </>
        );
      case 1:
        return (
          <>
            <div className="cara-pembayaran-tahap-2">
              <div className="cara-pembayaran-left-tahap-2">
                <StepPilihMetodeBayar
                  metodeBayar={metodeBayar}
                  totalPrice={totalPrice}
                />
              </div>
              <div className="cara-pembayaran-right-tahap-2">
                <StepKonfirmasiPembayaran
                  handleNextbutton={handleNext}
                  saveIdPutAPI={saveIdPutAPI}
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
  console.log(steps);
  return (
    <PaymentProvider>
      <div className="page-pembayaran">
        <div className="form-pembayaran">
          <div className="step-pembayaran">
            <div className="step-pembayaran-left">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                <img
                  src={panahsampingpembayaran}
                  alt="panahsampingpembayaran"
                />
              </Button>
              <strong>{getStepJudul(activeStep)}</strong>
            </div>
            <div className="step-pembayaran-right">
              <Stepper activeStep={activeStep}>
                {steps?.map((step, index) => {
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
    </PaymentProvider>
  );
};

export default Order;
