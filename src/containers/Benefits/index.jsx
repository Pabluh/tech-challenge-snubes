import Image from "next/image";
import styles from "./styles.module.scss";

export const Benefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textBenefits}>
          <div className={styles.itemsMobile}>
            <div>
              <Image
                src="/images/sign-up-for-free.svg"
                alt="Sign up for free"
                width={82}
                height={82}
              />
            </div>
            <br />
            <div className={styles.textMobile}>
              <h2>
                <strong>Sign up for free</strong>
              </h2>
              <br />
              <p>
                Signing up and setting up your project takes less than 5 minutes
              </p>
            </div>
          </div>
          <div className={styles.itemsMobile}>
            <div>
              <Image
                src="/images/source-smarter.svg"
                alt="Source smarter"
                width={82}
                height={82}
              />
            </div>
            <br />
            <div className={styles.textMobile}>
              <h2>
                <strong>Source smarter</strong>
              </h2>
              <br />
              <p>
                Our data-based AI and our experts will help you find exactly
                what you are looking for
              </p>
            </div>
          </div>
          <div className={styles.itemsMobile}>
            <div>
              <Image
                src="/images/receive-offers.svg"
                alt="Receive offers"
                width={82}
                height={82}
              />
            </div>
            <br />
            <div className={styles.textMobile}>
              <h2>
                <strong>Receive offers</strong>
              </h2>
              <br />
              <p>
                With our insights you always receive high-quality proposals at
                the best price
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
