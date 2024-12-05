import Link from 'next/link';
import styles from './ContactUs.module.scss';

export default function ContactUs({ contactContent, contactImage }) {
  console.log("Contact Content:", contactContent);
  console.log("Contact Images:", contactImage);


  const defaultBackgroundImage = contactImage?.[0] || '/contact-us-bg.jpg';
 
  const hoverBackgroundImage = contactImage?.[1] || '/contact-us-bg-hover.jpg';

 
  const contentText = contactContent.replace(/<p>|<\/p>/g, '') || 'Default Contact Us Text';

  return (
    <section
      className={`${styles.chooseUs}`}
      style={{
        backgroundImage: `url(${defaultBackgroundImage})`,
      }}
    >
      <div
        className={`${styles.chooseUsHover}`}
        style={{
          backgroundImage: `url(${hoverBackgroundImage})`,
        }}
      ></div>
      <div className={`${styles.content} text-center`}>
        <h2>{contentText}</h2>
        <Link href="/contact" passHref>
        <button className="btn btn-primary">Contact Us</button>
      </Link>
      </div>
    </section>
  );
}
