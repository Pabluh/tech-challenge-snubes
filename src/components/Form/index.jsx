import { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import countries from "../../assets/data/countries.json";
import styles from "./styles.module.scss";
import IconError from "../../assets/svg/icons/error.svg";

export const Form = ({ hasStyle }) => {
  const [country, setCountry] = useState({});
  const [countryCallingCode, setCountryCallingCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formContact, setFormContact] = useState({
    company: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const size = useWindowSize();

  const getInfosFromCountry = (country) => {
    const countryFound = countries.find((item) => item.name === country);
    return countryFound;
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const requestOptions = {
          method: "GET",
        };

        fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=0ac70d2404cd4bd1a5e500193327d602`,
          requestOptions,
        )
          .then((response) => response.json())
          .then((result) => {
            const nameCountry = result?.features[0]?.properties?.country;
            const infos = getInfosFromCountry(nameCountry);
            setCountry(infos);
          })
          .catch((error) => console.log("Error determining location", error));
      });
    }
  }, []);

  const sendEmail = async (event) => {
    event.preventDefault();

    await fetch("/api/email", {
      body: JSON.stringify(formContact),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => setSuccess(true))
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (countryCallingCode && country?.dial_code) {
      setCountry("");
    }
  }, [countryCallingCode, country]);

  const handleChangeSelect = (event) => {
    setCountryCallingCode(event.target.value);
    setFormContact({ ...formContact, phone: event.target.value });
  };

  const handleChangeCompany = (event) => {
    setFormContact({ ...formContact, company: event.target.value });
  };

  const handleChangeFullName = (event) => {
    setFormContact({ ...formContact, fullName: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setFormContact({ ...formContact, email: event.target.value });
  };

  const handleChangePhone = (event) => {
    setFormContact({ ...formContact, phone: event.target.value });
  };

  return (
    <>
      {success ? (
        <div className={styles.cardSuccess}>
          <div className={styles.title}>
            <span>
              <strong>Thank you for your request</strong>
            </span>
          </div>
          <div className={styles.message}>
            <p>
              {`You've taken the first step. Our experts will get in touch with
              you soon.`}
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.data}>
            <div className={styles.dataFields}>
              <span>Company</span>
              <span>Name</span>
              <span>Phone</span>
              <span>E-mail</span>
            </div>
            <div className={styles.dataValues}>
              <span>{formContact.company}</span>
              <span>{formContact.fullName}</span>
              <span>{formContact.phone}</span>
              <span>{formContact.email}</span>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={sendEmail}
          className={hasStyle ? styles.formStyled : styles.formWhite}
        >
          <div
            className={
              hasStyle ? styles.headerFormStyled : styles.headerFormWhite
            }
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
                value={formContact.company}
                onChange={handleChangeCompany}
                maxLength="80"
                required
              />
            </div>
            <div className={styles.fields}>
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                value={formContact.fullName}
                onChange={handleChangeFullName}
                maxLength="50"
                pattern="[A-Za-z ]+$"
                title="The name must contain only letters."
                required
              />
            </div>
            {size.width < 768 || (hasStyle && size.width > 1199) ? (
              <div className={styles.fields}>
                <label htmlFor="phone">Phone</label>
                <div className={styles.codeAndPhone}>
                  <select onChange={handleChangeSelect} required>
                    {country ? (
                      <option value={country.dial_code}>{country.flag}</option>
                    ) : (
                      <option value={countryCallingCode}></option>
                    )}
                    {countries?.map((item, index) => (
                      <option value={item.dial_code} key={index}>
                        {item.flag}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder={
                      countryCallingCode
                        ? countryCallingCode
                        : country.dial_code
                    }
                    className={styles.inputPhone}
                    value={formContact.phone}
                    onChange={handleChangePhone}
                    required
                    title="Phone must contain only numbers"
                    pattern="[\d ()+]+$"
                    minLength="6"
                    maxLength="20"
                  />
                </div>
              </div>
            ) : (
              <div className={styles.fields}>
                <label htmlFor="phone">Phone</label>
                <select onChange={handleChangeSelect} required>
                  {country ? (
                    <option value={country.dial_code}>{country.flag}</option>
                  ) : (
                    <option value={countryCallingCode}></option>
                  )}
                  {countries?.map((item, index) => (
                    <option value={item.dial_code} key={index}>
                      {item.flag}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder={
                    countryCallingCode ? countryCallingCode : country.dial_code
                  }
                  className={styles.inputPhone}
                  value={formContact.phone}
                  onChange={handleChangePhone}
                  required
                  title="Phone must contain only numbers"
                  pattern="[\d ()+]+$"
                  minLength="6"
                  maxLength="20"
                />
              </div>
            )}
            <div className={styles.fields}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@mail.com"
                value={formContact.email}
                onChange={(event) =>
                  setFormContact({ ...formContact, email: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className={styles.buttonForm}>
            <button type="submit">Get informed</button>
          </div>
          {error && (
            <div className={styles.errorContainer}>
              <IconError />
              <label>
                Your information was not submited due to an error. Please retry.
              </label>
            </div>
          )}
        </form>
      )}
    </>
  );
};
