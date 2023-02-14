import { Header } from "../../components";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";
import { Services } from "./Services";
import { Testimonial } from "./Testimonial";
import { WhyUs } from "./WhyUs";

const Home = () => {
  return (
    <main>
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
