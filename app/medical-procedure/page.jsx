"use client";
import React from "react";
import styles from "./layout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const mpage = () => {
  return (
    <div>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <div className={`col-md-6`}>
            <div className={styles.coldiv}>
              <div>
              <div id="accordion">
    <div className="card">
      <div className="card-header">
        <a className="btn btn-info" data-bs-toggle="collapse" href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </div>
      <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <a className="collapsed btn btn-info" data-bs-toggle="collapse" href="#collapseTwo">
        Collapsible Group Item #2
      </a>
      </div>
      <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <a className="collapsed btn btn-info" data-bs-toggle="collapse" href="#collapseThree">
          Collapsible Group Item #3
        </a>
      </div>
      <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.coldiv}>
              <p>Column 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mpage;
