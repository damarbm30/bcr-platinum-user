import { check, service } from "../../../assets";

const ItemList = ({ children }) => {
  return (
    <li className="d-flex align-items-center gap-3 mb-3">
      <img src={check} alt="check" />
      <p className="mb-0 fw-bold">{children}</p>
    </li>
  );
};

const Services = () => {
  return (
    <section id="services" className="container section-pt">
      <div className="row align-items-center justify-content-around">
        <img src={service} alt="service" className="col-md-5 img-fluid" />
        <div className="col-md-5 mt-3 mt-md-0">
          <h1 className="fs-4 fw-bold">Best Car Rental for any kind of trip in Yogyakarta!</h1>
          <p className="fw-bold mt-3">
            Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
            mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <ul className="ps-0 mt-3">
            <ItemList>Sewa Mobil Dengan Supir di Bali 12 Jam</ItemList>
            <ItemList>Sewa Mobil Lepas Kunci di Bali 24 Jam</ItemList>
            <ItemList>Sewa Mobil Jangka Panjang Bulanan</ItemList>
            <ItemList>Gratis Antar - Jemput Mobil di Bandara</ItemList>
            <ItemList>Layanan Airport Transfer / Drop In Out</ItemList>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Services;
