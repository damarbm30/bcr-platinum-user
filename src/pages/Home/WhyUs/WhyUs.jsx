import { like, price, professional, time } from "../../../assets";

const Card = ({ title, img, children }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <img src={img} alt="like" width={32} height={32} />
        <h2 className="mt-3 fw-bold fs-6">{title}</h2>
        <p className="mt-3 fw-bold">{children}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section id="whyus" className="container section-pt">
      <h1 className="fs-3 text-center text-md-start">Why Us?</h1>
      <p className="fw-bold mt-3 text-center text-md-start">Mengapa harus pilih Binar Car Rental?</p>
      <div className="d-md-flex flex-column-sm gap-4">
        <Card title="Mobil Lengkap" img={like}>
          Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat
        </Card>
        <Card title="Harga Murah" img={price}>
          Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
        </Card>
        <Card title="Layanan 24 Jam" img={time}>
          Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
        </Card>
        <Card title="Sopir Profesional" img={professional}>
          Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
        </Card>
      </div>
    </section>
  );
};
export default WhyUs;
