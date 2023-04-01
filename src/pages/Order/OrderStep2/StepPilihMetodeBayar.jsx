import React from "react";
import { icon_copy } from "~/assets";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Timer24 from "./Timer24";
import CopyToClipboard from "react-copy-to-clipboard";
import InputAdornment from "@mui/material/InputAdornment";
import CardInstruksiPembayaran from "./CardInstruksiPembayaran";
import "../Order.css";

const StepPilihMetodeBayar = ({ metodeBayar, totalPrice }) => {
  return (
    <div>
      <div className=".cara-pembayaran-left-tahap-2">
        <div className="card menu-countdown-24jam">
          <div className="selesaikan-pembayaran-count-left">
            <p>
              <strong>Selesaikan Pembayaran Sebelum</strong>
            </p>
            <p className="pt24">Rabu, 19 Mei 2022 jam 13.00 WIB</p>
          </div>
          <div className="timer24">
            <Timer24 duration={24 * 60 * 60 * 1000} />
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
                {metodeBayar}
              </button>
            </div>
            <div>
              <p>{metodeBayar} Transfer</p>
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
                defaultValue={totalPrice}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CopyToClipboard text={totalPrice}>
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
        <div className="card instruksi-pembayaran">
          <CardInstruksiPembayaran metodeBayar={metodeBayar} />
        </div>
      </div>
    </div>
  );
};

export default StepPilihMetodeBayar;
