import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../utils/data";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    let items = document.querySelectorAll(".carousel .carousel-item");

    items.forEach((el) => {
      const minPerSlide = 3;
      let next = el.nextElementSibling;

      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, []);

  return (
    <section id="testimonial" className="container-fluid section-pt testimonial">
      <div className="text-center">
        <h2 className="fw-bold mb-3">Testimonial</h2>
        <p className="fw-bold mb-5">Berbagai review positif dari pelanggan kami</p>
      </div>
      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="false">
        <div className="carousel-inner overflow-visible" role="listbox">
          {testimonials?.map((testimonial) => {
            const { id, avatar, body, info, isActive } = testimonial;
            return (
              <div className={`carousel-item ${isActive === "active" ? "active" : ""}`} key={id}>
                <TestimonialCard id={id} avatar={avatar} body={body} info={info} />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center gap-3 mt-5">
          <button
            className="carousel-control-prev rounded-circle position-relative p-3"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next rounded-circle position-relative p-3"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
