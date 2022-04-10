import styles from "./styles.module.scss";

export const Proposition = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            <strong>Why Snubes</strong>
          </h2>
          <br />
          <br />
          <h3>
            <strong>Trusted Know-How</strong>
          </h3>
          <br />
          <span>
            {`We have more than 20 years of experience and continuously check call
            centers for their quality and capabilities. Customers like Allianz
            trust Snubes industry knowledge.`}
          </span>
          <br />
          <br />
          <h3>
            <strong>Time and cost savings</strong>
          </h3>
          <br />
          <span>
            {`With Snubes you can easily compare prices, quality and availability,
            and find more potential suppliers. Reach your goal faster and save
            resources.`}
          </span>
          <br />
          <br />
          <h3>
            <strong>Satisfaction guaranteed</strong>
          </h3>
          <br />
          <span>
            {`We offer a validated data-based approach to procurement, rather than
            awarding contracts only based on the lowest price, an existing
            relationship or "gut feeling".`}
          </span>
        </div>
      </div>
    </div>
  );
};
