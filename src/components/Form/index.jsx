import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./styles.module.scss";

export const Form = ({ hasStyle }) => {
  const size = useWindowSize();

  return (
    <form className={hasStyle ? styles.formStyled : styles.formWhite}>
      <div
        className={hasStyle ? styles.headerFormStyled : styles.headerFormWhite}
      >
        {hasStyle ? (
          <div className={styles.headerFormStyled}>
            <h1>Find inbound call centers</h1>
          </div>
        ) : (
          <div className={styles.headerFormWhite}>
            <h1>Find inbound call centers for your company</h1>
            <br />
            <h2>
              Use our AI and Big Data driven call center sourcing solution
            </h2>
          </div>
        )}
      </div>
      <div
        className={
          hasStyle ? styles.contentFormStyled : styles.contentFormWhite
        }
      >
        <div className={styles.fields}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
          />
        </div>
        <div className={styles.fields}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Full name" />
        </div>
        {(hasStyle && size.width < 768) || (hasStyle && size.width > 1199) ? (
          <div className={styles.fields}>
            <label htmlFor="phone">Phone</label>
            <div>
              <select type="text" id="ddi" name="ddi">
                <option value="+49">+49</option>
              </select>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+49"
                className={styles.inputPhone}
              />
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="phone">Phone</label>
            <select type="text" id="ddi" name="ddi">
              <option value="+49">+49</option>
            </select>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+49"
              className={styles.inputPhone}
            />
          </div>
        )}
        <div className={styles.fields}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="name@mail.com"
          />
        </div>
      </div>

      <div className={styles.buttonForm}>
        <button type="submit">Get informed</button>
      </div>
    </form>
  );
};
