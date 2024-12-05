import Image from "next/image";
import styles from "./Services.module.scss";

export default function Services({ servicesContent, serviceImages }) {
  // console.log("Services Content:", servicesContent);
  // console.log("Service Images:", serviceImages);

  // const services = [
  //   {
  //     id: 1,
  //     title: "Advanced Technology",
  //     text: "We use cutting-edge technology for accurate diagnoses and treatments.",
  //     image: "/service-1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Professional Staff",
  //     text: "Our medical professionals are highly experienced and skilled.",
  //     image: "/service-2.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Comprehensive Health Checks",
  //     text: "We provide a range of health check packages tailored to your needs.",
  //     image: "/service-3.png",
  //   },
  // ];

  // Parse services content into a usable format
  let parsedServices = [];
  try {
    // Extract the content inside <p></p> tags and parse it into JSON
    const jsonString = servicesContent.match(/<p>(.*?)<\/p>/)?.[1] || "";
    parsedServices = eval(`[${jsonString}]`); // Safely parse content to an array
  } catch (error) {
    console.error("Failed to parse services content:", error);
  }

  // Merge parsed services with their respective images
  const services = parsedServices.map((service, index) => ({
    ...service,
    image: serviceImages[index],
  }));

  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div className={`card h-100 hover-effect ${styles[`hover-effect`]}`}>
              <Image
                src={service.image}
                alt={service.title}
                className="card-img-top"
                width={300}
                height={400}
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
  );
}
