import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <section className={`${styles.chooseUs}`}>
      <div className={`${styles.content} text-center`}>
        <h2>We Are The Best And that Why You Can Choose Us Easily</h2>
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </section>
  );
}
