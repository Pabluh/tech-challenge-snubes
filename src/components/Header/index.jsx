import styles from "./styles.module.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src="/images/logo.svg" alt="Snubes" width={161} height={36} />
        <ul className={styles.navList}>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>How it works</a>
          </li>
          <li>
            <a>Become a Partner</a>
          </li>
          <li>
            <a>EUR</a>
          </li>
          <li>
            <a>EN</a>
          </li>
          <li>
            <a>Sign In</a>
          </li>
          <li>
            <a>Get Access</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
