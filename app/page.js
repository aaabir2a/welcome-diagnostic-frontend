import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";


export default function Home() {
  return (
    <div>
      
      <div className="container py-5">
        <h1>Welcome to Our Homepage</h1>
        <p>This is the home page of our website.</p>
      </div>
    </div>
  );
}