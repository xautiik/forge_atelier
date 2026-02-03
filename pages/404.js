import Link from 'next/link';
import styles from './404.module.css';
import { FaSearch } from 'react-icons/fa';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <FaSearch className={styles.magnifyingGlass} />
      </div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <br />
      <Link href="/">
              <button className='button-primary'>Go back to home</button>
      </Link>
    </div>
  );
};

export default Custom404;
