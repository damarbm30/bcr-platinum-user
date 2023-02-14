import "./FAQ.css";
import Accordion from "./Accordion";
import { faqs } from "../../../constants";

const FAQ = () => {
  return (
    <section id="faq" className="container section-pt">
      <div className="row">
        <div className="d-flex flex-column col-md-4 col-12 fs-2">
          <h1 className="fs-3 fw-bold text-center text-md-start">Frequently Asked Questions</h1>
          <p className="mt-3 fw-bold text-center text-md-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="col-md-8 col-12 mt-3 mt-md-0">
          <div className="accordion d-flex flex-column gap-3" id="accordionExample">
            {faqs?.map((item) => {
              const { id, title, body } = item;
              return <Accordion id={id} title={title} body={body} key={id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
