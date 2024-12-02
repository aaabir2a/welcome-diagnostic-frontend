import styles from "./Address.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Address = () => {
  return (
    <div className={`p-2 text-center ${styles.address}`}>
      <p>1234 Street Name, City, State, Zip</p>
    </div>
  );
};

export default Address;
