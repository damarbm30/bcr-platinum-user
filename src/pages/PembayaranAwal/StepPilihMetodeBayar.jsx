import React from "react";
import { icon_copy } from "../../assets";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Timer24 from "./Timer24";
import CopyToClipboard from "react-copy-to-clipboard";
import InputAdornment from "@mui/material/InputAdornment";
import CardInstruksiPembayaran from "./CardInstruksiPembayaran";

const StepPilihMetodeBayar = ({ metodePembayaranfunction }) => {
  let metodePembayaran = metodePembayaranfunction;

  return (
    <div className="cara-pembayaran-tahap-2">
      <div className=".cara-pembayaran-left-tahap-2">
        <div className="card menu-countdown-24jam">
          <div className="selesaikan-pembayaran-count-left">
            <p>
              <strong>Selesaikan Pembayaran Sebelum</strong>
              <br></br>
              <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
            </p>
          </div>
          <div className="selesaikan-pembayaran-count-right">
            <p>
              <Timer24 duration={1 * 24 * 60 * 60 * 1000} />
            </p>
          </div>
        </div>
        <div className="card menu-lakukan-trasnfer">
          <div>
            <p>
              <strong>Lakukan Transfer Ke</strong>
            </p>
          </div>
          <div>
            <div>
              <button role="button" type="submit" className="tombol-pilih-atm">
                {metodePembayaran}
              </button>
            </div>
            <div>
              <p>{metodePembayaran} Transfer</p>
              <p>a.n Binar Car Rental</p>
            </div>
          </div>
          <div className="nomor-rekening-copy">
            <div className="nomor-rekening">
              <p>Nomor Rekening</p>
              <TextField
                className="text_field_edit"
                id="outlined-read-only-input"
                defaultValue="54104257877"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CopyToClipboard text="54104257877">
                        <Button>
                          <img src={icon_copy} alt="icon_copy" />
                        </Button>
                      </CopyToClipboard>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="Total Bayar">
              <p>Total Bayar</p>
              <TextField
                className="text_field_edit"
                id="outlined-read-only-input"
                defaultValue="total harga"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CopyToClipboard text="total harga">
                        <Button>
                          <img src={icon_copy} alt="icon_copy" />
                        </Button>
                      </CopyToClipboard>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <CardInstruksiPembayaran metodePembayaranfunction={metodePembayaran} />
      </div>
    </div>
  );
};

export default StepPilihMetodeBayar;
