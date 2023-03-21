import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Order.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CardInstruksiPembayaran({ metodePembayaranfunction }) {
  const [value, setValue] = React.useState(0);
  let metodePembayaran = metodePembayaranfunction;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <p>
        <strong>Intruksi Pembayaran</strong>
      </p>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label={"ATM " + metodePembayaran} {...a11yProps(0)} />
            <Tab label={"M-" + metodePembayaran} {...a11yProps(1)} />
            <Tab label={metodePembayaran + " Klik"} {...a11yProps(2)} />
            <Tab label="Internet Banking" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <li>Masukkan kartu ATM</li>
          <li>
            lalu PIN Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek{" "}
            {metodePembayaran} Virtual Account”
          </li>
          <li>
            Masukkan nomor {metodePembayaran} Virtual Account: 70020+Order ID
            Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
          </li>
          <li>
            Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
            menyelesaikan transaksi
          </li>
          <li>Ambil dan simpanlah bukti transaksi tersebut</li>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <li>Login dengan akun Mbanking Anda.</li>
          <li>
            Pilih menu “m-Transfer”, pilih “{metodePembayaran} Virtual Account”
          </li>
          <li>Input Kode Virtual Account: 39107+20+NRP.</li>
          <li>
            Klik menu “Simpan Daftar Transfer” untuk menyimpan nomor pembayaran
            mahasiswa.
          </li>
          <li>Klik OK kemudian Kirim/Send.</li>
          <li>Input PIN {metodePembayaran} untuk mengotorisasi.</li>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <li>Masukkan produk ke Keranjang Belanja.</li>
          <li>
            Pilih metode pembayaran Klik{metodePembayaran}, lalu klik Checkout.
          </li>
          <li>
            Pada halaman ringkasan pembayaran masukkan User ID KlikBCA kamu,
            lalu pilih Bayar Sekarang.
          </li>
          <li>
            Masuk ke akun Klik{metodePembayaran} lewat halaman Klik
            {metodePembayaran}.
          </li>
          <li>Pilih menu Pembayaran e-Commerce.</li>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <li>Login ke akun Internet Banking {metodePembayaran}</li>
          <li>Pilih menu Pembayaran</li>
          <li>
            Pilih menu {metodePembayaran} lalu Anda akan diarahkan pada layar
            "Pengisian Data"
          </li>
          <li>
            Masukkan 18 digit nomor rekening Virtual Account pesanan Anda
            kemudian klik "Kirim"
          </li>
          <li>
            Periksa kembali data pembayaran yang muncul pada layar "Konfirmasi
            Data"
          </li>
          <li>
            Masukkan password serta mToken Internet Banking {metodePembayaran}{" "}
            Anda kemudian klik "Kirim"
          </li>
          <li>Pembayaran selesai, simpan bukti pembayaran Anda</li>
        </TabPanel>
      </Box>
    </div>
  );
}
