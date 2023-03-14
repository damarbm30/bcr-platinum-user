import { Header } from "../../components";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";
import { Services } from "./Services";
import { Testimonial } from "./Testimonial";
import { WhyUs } from "./WhyUs";
import { Navbar } from "../../components";
import usePayment from "../../store/Pembayaran";

const Home = () => {
  const data = usePayment((state) => state);
  console.log(data);
  return (
    <main>
      <Navbar />
      <Header isHome />
      <Services />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
    </main>
  );
};
export default Home;
