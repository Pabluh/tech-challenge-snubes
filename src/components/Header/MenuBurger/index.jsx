import Image from "next/image";
import Link from "next/link";
import { ListLinks } from "../ListLinks";
import { slide as Menu } from "react-burger-menu";
import { stylesMenu } from "./stylesMenu.js";

export const MenuBurger = () => {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            src="/images/snubes.svg"
            alt="Snubes"
            width={101}
            height={25}
          />
        </a>
      </Link>
      <Menu styles={stylesMenu} width={240} right={true}>
        <ListLinks />
      </Menu>
    </>
  );
};
