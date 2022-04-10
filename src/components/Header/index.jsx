import { useWindowSize } from "../../hooks/useWindowSize";
import { MenuFull } from "./MenuFull";
import { MenuBurger } from "./MenuBurger";
import styles from "./styles.module.scss";

export const Header = () => {
  const size = useWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {size.width < 1200 ? <MenuBurger /> : <MenuFull />}
      </div>
    </div>
  );
};
