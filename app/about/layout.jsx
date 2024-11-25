import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './layout.module.scss';

export const metadata = {
  title: 'About Us - Welcome Medical & Diagnostic Center',
  description: 'Learn more about our trusted medical and diagnostic services.',
};

export default function AboutLayout({ children }) {
  return (
    <div className={styles.aboutLayout}>
      <Navbar buttonText="Check Mail" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
