import styles from "./Address.module.scss";

const Address = () => {
  return (
    <div className={`p-2 text-center d-flex justify-content-between align-items-center ${styles.address}`}>
      <div className="d-flex align-items-center">
        <i className="fas fa-map-marker-alt me-2"></i>
        <span>welcome Diagnostic, Purana Paltan, Dhaka-1000.</span>
      </div>
      <div className="d-flex align-items-center">
        <i className="fas fa-phone-alt me-2"></i>
        <span>+880 0170000000, 0170000000 </span>
      </div>
      <div className="d-flex align-items-center">
        <i className="fas fa-envelope me-2"></i>
        <span>www.welcome@gmail.com</span>
      </div>
    </div>
  );
};

export default Address;
