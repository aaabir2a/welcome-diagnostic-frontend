import Image from "next/image";
import styles from "./Services.module.scss";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Advanced Technology",
      text: "We use cutting-edge technology for accurate diagnoses and treatments.",
      image: "/service-1.png",
    },
    {
      id: 2,
      title: "Professional Staff",
      text: "Our medical professionals are highly experienced and skilled.",
      image: "/service-2.png",
    },
    {
      id: 3,
      title: "Comprehensive Health Checks",
      text: "We provide a range of health check packages tailored to your needs.",
      image: "/service-3.png",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4 mb-4" key={service.id}>
              <div className={`card h-100 hover-effect ${styles[`hover-effect`]}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  width={300} height={400}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
