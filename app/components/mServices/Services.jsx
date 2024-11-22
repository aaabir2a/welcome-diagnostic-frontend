import Image from 'next/image';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Advanced Technology',
      text: 'We use cutting-edge technology for accurate diagnoses and treatments.',
      image: '/service-1.png',
    },
    {
      id: 2,
      title: 'Professional Staff',
      text: 'Our medical professionals are highly experienced and skilled.',
      image: '/service-2.png',
    },
    {
      id: 3,
      title: 'Comprehensive Health Checks',
      text: 'We provide a range of health check packages tailored to your needs.',
      image: '/service-3.png',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesHeader}>We Are Trusted For Our Services</h2>
      <div className={styles.cardContainer}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <Image src={service.image} alt={service.title} width={500} height={500}  />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
