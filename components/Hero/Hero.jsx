import Image from "next/image";
import styles from "./Hero.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    
    <div className={styles.hero}>
      <div className={styles.content}>
        
        <p className={styles.subtitle}>WELCOME TO</p>
        <h1 className={styles.title}>
          Welcome MEDICAL AND DIAGNOSTIC CENTER
        </h1>
        <h2 className={styles.subtext}>
          WELCOME মেডিক্যাল এন্ড ডায়াগনস্টিক সেন্টার
        </h2>
        <p className={styles.description}>Smart Steps to Health</p>
        <div className={styles.buttons}>
          <button className="btn btn-primary">Know Us</button>
          <button className="btn btn-outline-primary ms-3">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
