import React from "react";

export const GooleMap = () => {
  return (
    <div>
      <div className="map">
        <h2>Our Location</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3650.4727363857724!2d90.421988!3d23.8017831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b053a19b33%3A0x4b62dffc83561896!2sWelcome%20Diagnostic%20%26%20Medical%20Center!5e0!3m2!1sen!2sbd!4v1733828930504!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
