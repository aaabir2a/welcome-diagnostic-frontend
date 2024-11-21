import Image from "next/image";
import styles from "./Hero.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div>
      <div>
        <Image src="/bg.jpg"
        alt="Example"
        width={500}
        height={300}/>
        <h1>Hero Section</h1>
      </div>
    </div>
  );
};

export default Hero;
