"use client";
import React from "react";
import styles from "./layout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Image from "next/image";

const mpage = () => {
  return (
    <div>
      <div className={`header ${styles.header}`}>
        <h5 className={`h5header ${styles.h5header}`}>Procedure</h5>
        <h2 className={`h2header ${styles.h2header}`}>
          Making you better, every time
        </h2>
        <h6>Steps of Medical Service Delivery</h6>
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row d-flex align-items-stretch">
          <div className={`col-md-6`}>
            <div className={styles.coldiv}>
              <div>
                <div id="accordion">
                  {[
                    { id: "one", title: "Manpower Passengers", content: "The Cash Officer Checks- Up His Relevant Papers/Documents For His Identity And After Payment Of Requisite Fees, Issues The Papers For Medical Check-Up And Direct Him To Medical Inspection Room." },
                    {
                      id: "two",
                      title: "Front Desk",
                      content:
                        "The Cash Officer checks up relevant papers/documents...",
                    },
                    {
                      id: "three",
                      title: "Registration and Cash Counter",
                      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, est odio nobis voluptas placeat quaerat totam. Quam quo eius aut, omnis exercitationem nesciunt unde debitis ea laborum deserunt dolorum tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id animi et voluptate, dolorum",
                    },
                    { id: "four", title: "Medical Inspection Room", content: "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection." },
                    { id: "five", title: "Sample Collevtion booth", content: "As Per Advice Of Medical Officer, The Sample Collector Collects Blood And Urine Samples And Directs The Passenger To X-Ray Room For CXR." },
                    { id: "six", title: "X-Ray Room", content: "The Radiographer As Per Advice Of Medical Officer Takes The X-Ray Of The Passenger After Confirmation Of His Identity And Keeps The Records. At This Point, The Passenger Is Instructed About Date And Time Of Report Delivery." },
                    { id: "seven", title: "PathLab", content: "Collected Samples Are Sent To This Special Laboratory For Examination And The Specimens Are Examined By The Consultant Pathologist With The Help Of Lab Technician. The Results Are Recorded And Stored In Computer." },
                    { id: "eight", title: "Process Room", content: "The Room In Charge Sorts Out Reports Form X-Ray Room And Laboratory And Find Out Who Are Fit To Travel And He Process Fit / Unfit Medical Card And Sends Those To The Chief Medical Officer For Further Examination And Actions." },
                    { id: "nine", title: "Chief Meedical Officer", content: "Chief Medical Officer After Thorough Check And Scrutiny Of All Papers And Documents Issues Fit Or Unfit Card And Forwarded Those Reports To Delivery Desk." },
                    { id: "ten", title: "Medical Inspection Room", content: "The Desk Officer Delivers The Medical Report Card And Returns The Passport To The Passenger On Due Date. We Also Provide All Passenger's Report On Our Web Site For Further Reference. Anybody Can Track Passenger's FIT/UNFIT/HELDUP Report From Our Website." },

                  ].map((item) => (
                    <div className="card" key={item.id}>
                      <div className="card-header">
                        <a
                          className="btn btn-info w-100 text-center"
                          data-bs-toggle="collapse"
                          href={`#collapse${item.id}`}
                          style={{ minHeight: "50px" }}
                          
                        >
                          {item.title}
                        </a>
                      </div>
                      <div
                        id={`collapse${item.id}`}
                        className={`collapse ${item.id === "one" ? "show" : ""}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" >
            <div className={styles.coldiv}>
              <div className={`imgDiv ${styles.imgDiv}`}>
                <Image
                  src="/service-3.png"
                  alt="Doctor holding pills"
                  width={500}
                  height={600}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mpage;
