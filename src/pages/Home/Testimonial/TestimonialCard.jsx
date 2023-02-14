import "./Testimonial.css";

const TestimonialCard = ({ avatar, body, info }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card testimonial-card mx-4">
        <div className="card-body d-flex align-items-center gap-3">
          <img src={avatar} alt="avatar" className="rounded-circle" />
          <div className="d-flex flex-column gap-2">
            <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
            <p className="fw-bold text-wrap">{body}</p>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
