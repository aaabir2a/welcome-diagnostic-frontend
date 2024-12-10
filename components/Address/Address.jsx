import styles from "./Address.module.scss";

const Address = () => {
  return (
    <div className={`p-2 text-center d-flex justify-content-center align-items-center gap-5 ${styles.address}`}>
      <div className="d-flex align-items-center">
        <i className="fas fa-map-marker-alt me-2"></i>
        <span> House-10, Road-8 Baridhara J Block, Dhaka 1212.</span>
      </div>
      <div className="d-flex align-items-center">
        <i className="fas fa-phone-alt me-2"></i>
        <span>+880 01977-043482 </span>
      </div>
      <div className="d-flex align-items-center">
        <i className="fas fa-envelope me-2"></i>
        <span>www.welcome@gmail.com</span>
      </div>
    </div>
  );
};

export default Address;
