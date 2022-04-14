import Link from "next/link";
import styles from "./styles.module.scss";
import ArrowDown from "../../../assets/svg/icons/arrow-down.svg";

export const ListLinks = () => {
  return (
    <>
      <li>
        <Link href="/about-us">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/how-it-works">
          <a>How it works</a>
        </Link>
      </li>
      <li>
        <Link href="/become-a-partner">
          <a>Become a Partner</a>
        </Link>
      </li>
      <li>
        <>
          <Link href="/eur">
            <a>EUR</a>
          </Link>
          <ArrowDown className={styles.arrowDown} />
        </>
      </li>
      <li>
        <>
          <Link href="/en">
            <a>EN</a>
          </Link>
          <ArrowDown className={styles.arrowDown} />
        </>
      </li>
      <li>
        <Link href="/sign-in">
          <a>Sign In</a>
        </Link>
      </li>
      <li>
        <Link href="/get-access">
          <a>Get Access</a>
        </Link>
      </li>
    </>
  );
};
