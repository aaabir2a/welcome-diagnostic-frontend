import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './layout.module.css';

export const metadata = {
  title: 'About Us - Ibn Omar Medical & Diagnostic Center',
  description: 'Learn more about our trusted medical and diagnostic services.',
};

export default function AboutLayout({ children }) {
  return (
    <div className={styles.aboutLayout}>
      {/* Pass a prop to change the button text */}
      <Navbar buttonText="Check Mail" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
