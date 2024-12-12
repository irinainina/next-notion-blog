import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundPageContainer}>      
      <div className={styles.notFoundInfo}>
        <h1 className={styles.notFoundInfoHeader}>Page not found</h1>
        <p className={styles.notFoundInfoText}>Oops, this page was not found.</p>
        <p className={styles.notFoundInfoText}>Error 404. Try again.</p>
        <Link href="/" className={styles.notFoundInfoButton}>
          <div className={styles.alignedFlexBox}>
            Go to Homepage
          </div>
        </Link>
      </div>
    </div>
  );
}
