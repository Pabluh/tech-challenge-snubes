import Image from "next/image";
import ArrowDown from "../../../assets/svg/icons/arrow-down.svg";
import styles from "../styles.module.scss";

export const MenuFull = () => {
  return (
    <>
      <Image src="/images/logo.svg" alt="Snubes" width={161} height={36} />
      <nav>
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
            <a>
              EUR <ArrowDown className={styles.arrowDown} />
            </a>
          </li>
          <li>
            <a>
              EN <ArrowDown className={styles.arrowDown} />
            </a>
          </li>
          <li>
            <a>Sign In</a>
          </li>
          <li>
            <a>Get Access</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
