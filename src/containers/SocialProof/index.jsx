import React, { useState, useEffect, useRef } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Testimonial } from "../../components/Testimonial";
import styles from "./styles.module.scss";
import ArrowPrev from "../../assets/svg/icons/arrow-prev.svg";
import ArrowNext from "../../assets/svg/icons/arrow-next.svg";
import Image from "next/image";

export const SocialProof = () => {
  const leftArrowEl = useRef(null);
  const rightArrowEl = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, [leftArrowEl, rightArrowEl]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isInitialized && (
          <Glider
            hasArrows
            hasDots
            slidesToShow={1}
            slidesToScroll={1}
            className="gradient-outline"
            arrows={{
              prev: leftArrowEl.current,
              next: rightArrowEl.current,
            }}
          >
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </Glider>
        )}
        <div>
          <button
            ref={leftArrowEl}
            type="button"
            className="glider-prev"
            aria-label="Previous"
          >
            <ArrowPrev />
          </button>
          <button
            ref={rightArrowEl}
            type="button"
            className="glider-next"
            aria-label="Next"
          >
            <ArrowNext />
          </button>
        </div>
        <div className={styles.logos}>
          <div className={styles.logo1}>
            <Image
              src="/images/logos/allianz.jpg"
              width={136}
              height={36}
              alt="Allianz"
            />
          </div>
          <div className={styles.logo2}>
            <Image
              src="/images/logos/creditshelf.jpg"
              width={86}
              height={36}
              alt="Creditshelf"
            />
          </div>
          <div className={styles.logo3}>
            <Image
              src="/images/logos/laserhub.jpg"
              width={173}
              height={36}
              alt="Usercentrics"
              className={styles.logo3}
            />
          </div>
          <div className={styles.logo4}>
            <Image
              src="/images/logos/talixo.jpg"
              width={149}
              height={36}
              alt="Laserhub"
              className={styles.logo4}
            />
          </div>
          <div className={styles.logo5}>
            <Image
              src="/images/logos/usercentrics.jpg"
              width={129}
              height={31}
              alt="Talixo"
              className={styles.logo5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
