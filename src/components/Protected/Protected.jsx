import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { TOKEN } from "../../action/Auth";

function Protected({ component }) {
  if (localStorage.getItem(TOKEN)) {
    return <>{component}</>;
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Harap untuk Sign In terlebih dahulu",
      showConfirmButton: false,
      timer: 1000,
    });
    return <Navigate to="/login" />;
  }
}

export default Protected;
