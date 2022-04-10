import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { stylesMenu } from "./stylesMenu.js";
import ArrowDown from "../../../assets/svg/icons/arrow-down.svg";
import styles from "../styles.module.scss";

export const MenuBurger = () => {
  return (
    <>
      <Image src="/images/snubes.svg" alt="Snubes" width={101} height={25} />
      <Menu styles={stylesMenu} width={240} right={true}>
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
      </Menu>
    </>
  );
};
