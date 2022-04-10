import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./styles.module.scss";
import { Form } from "../../components/Form";

export const Hero = () => {
  const size = useWindowSize();

  return (
    <>
      {size.width < 1200 && <Form className={styles.formulario} />}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formulario}>
            <Form className={styles.formulario} />
          </div>
          <div className={styles.text}>
            <h1>{`Welcome to Europe's largest call center database`}</h1>
            <div className={styles.textStatistics}>
              <div>
                <span>
                  <strong>500+</strong>
                  <br />
                  Tenders
                </span>
              </div>
              <div>
                <span>
                  <strong>200+</strong>
                  <br />
                  Callcenter
                </span>
              </div>
              <div>
                <span>
                  <strong>375.000</strong>
                  <br />
                  Agents available
                </span>
              </div>
              <div>
                <span>
                  <strong>85%</strong>
                  <br />
                  Faster Sourcing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
