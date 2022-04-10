import Image from "next/image";
import styles from "./styles.module.scss";
import Facebook from "../../assets/svg/icons/facebook.svg";
import Twitter from "../../assets/svg/icons/twitter.svg";
import Linkedin from "../../assets/svg/icons/linkedin.svg";

export const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.contentBrown}>
        <div className={styles.badge}>
          <Image
            src="/images/badge-best-of-internet.jpg"
            width={85}
            height={85}
            alt="Best internet badge 2018"
          />
        </div>
        <div className={styles.text}>
          <span>About us</span>
          <span>Become a Partner</span>
          <span>FAQ</span>
          <span>Imprint</span>
          <span>{`Terms & Conditions`}</span>
          <span>Privacy Policy</span>
          <span>support@snubes.com</span>
          <span>+49 (0) 305 5645327</span>
          <div className={styles.icons}>
            <Facebook className={styles.facebook} />
            <Twitter className={styles.twitter} />
            <Linkedin className={styles.linkedin} />
          </div>
        </div>
      </div>
      <div className={styles.contentWhite}>
        <span>{`©${year} Snubes GmbH All Rights Reserved.`}</span>
      </div>
    </div>
  );
};
