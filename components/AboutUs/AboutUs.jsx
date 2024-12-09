import Image from "next/image"; // Import Next.js Image component
import styles from "./AboutUs.module.scss";
import Link from "next/link";
import { BASE_URL } from "@/constant/constant";

export default function AboutUs({ menusData, homeId, aboutContent, aboutImage }) {
  // console.log("Menus Data:", menusData);
  // console.log("Home Menu ID:", homeId);
  // console.log("Aboutbgf Content:", aboutContent);
  // console.log("About Image:", aboutImage);

  return (
    <div className="container pt-5 pb-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        {aboutImage ? (
          <Image
            src={aboutImage}
            alt="About Us"
            width={400}
            height={400}
            className={styles.image}
          />
        ) : (
          <p>Image not available</p>
        )}
      </div>
        <div className="col-md-6">
          {aboutContent ? (
            <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
          ) : (
            <p>No content available</p>
          )}
          <div>
            <Link href="/about">
              <button className="btn btn-primary">About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
