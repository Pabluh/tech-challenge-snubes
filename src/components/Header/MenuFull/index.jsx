import Image from "next/image";
import Link from "next/link";
import { ListLinks } from "../ListLinks";
import styles from "../styles.module.scss";

export const MenuFull = () => {
  return (
    <>
      <Link href="/">
        <a>
          <Image src="/images/logo.svg" alt="Snubes" width={161} height={36} />
        </a>
      </Link>
      <nav>
        <ul className={styles.navList}>
          <ListLinks />
        </ul>
      </nav>
    </>
  );
};
