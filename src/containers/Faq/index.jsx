import React from "react";
import Image from "next/image";
import { Form } from "../../components/Form";
import styles from "./styles.module.scss";

export const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <br />
          <br />
          <p>
            <strong>Are the call centers verified?</strong>
          </p>
          <br />
          <p>
            All call centers in our database are checked by quality assurance
            experts. We also take a look at their data and track the key
            performance indicators. In addition, clients rate call centers and
            share their customer experience.
          </p>
          <br />
          <br />
          <span>
            <strong>Which inbound services are offered at Snubes?</strong>
          </span>
          <p>
            Our listed call centers offer a broad spectrum of customer services,
            such as technical support, first-level support, helpdesk,
            overflow/after-hours support, etc.
          </p>
          <br />
          <br />
          <span>
            <strong>Are there any costs?</strong>
          </span>
          <p>
            The services of Snubes are free of charge and our call center
            experts advise you independently and personally. Together we strive
            to find the optimal solution.
          </p>
          <br />
          <br />
          <div className={styles.badge}>
            <Image
              src="/images/badge-best-of-internet.jpg"
              width={118}
              height={118}
              alt="Best internet badge 2018"
            />
          </div>
        </div>
        <Form hasStyle={true} />
      </div>
    </div>
  );
};
