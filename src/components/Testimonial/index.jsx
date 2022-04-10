import Image from "next/image";
import styles from "./styles.module.scss";

export const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/images/testimonials/talixo.jpg"
          width={129}
          height={31}
          alt="Talixo"
        />
        <br />
        <br />
        <div className={styles.text}>
          <p>
            <i>{`“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”`}</i>
          </p>
        </div>
        <br />
        <div>
          <span>
            <strong>Jan Brenneke</strong>, VP Operations
          </span>
        </div>
      </div>
    </div>
  );
};
