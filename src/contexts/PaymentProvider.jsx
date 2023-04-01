import React, { createContext } from "react";
// Create a context object
export const PaymentContext = createContext("default");

// Create a provider component
function PaymentProvider(props) {
  const BCA_TRANSFER = "BCA";
  const BNI_TRANSFER = "BNI";
  const MANDIRI_TRANSFER = "MANDIRI";

  return (
    <PaymentContext.Provider
      value={{
        BCA_TRANSFER,
        BNI_TRANSFER,
        MANDIRI_TRANSFER,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}

export default PaymentProvider;
