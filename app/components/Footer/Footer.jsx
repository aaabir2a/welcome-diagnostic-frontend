import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`bg-dark text-white text-center py-3 ${styles.footer}`}>
      <p>&copy; 2024 Welcome Diagnostic & Medical Center. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
