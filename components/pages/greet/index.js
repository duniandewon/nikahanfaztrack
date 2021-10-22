import { useState } from "react";
import { useRouter } from "next/router";

import useSwr from "../../../utils/useSwr";

import en from "../../../public/locales/en/translate";
import id from "../../../public/locales/id/translate";

import Wrapper from "../../layout/Wrapper";
import TextField from "../../elements/TextField";
import TextArea from "../../elements/TextArea";
import Greetings from "../../elements/GreetingsList";

import styles from "./Greet.module.scss";

const Greet = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { locale } = useRouter();

  const t = locale === "en" ? en : id;

  const resetForm = () => {
    setName("");
    setMessage("");
  };

  const { loading, messages, sendGreeting } = useSwr();

  const handleSendGreeting = () => {
    sendGreeting({ name, message });

    resetForm();
  };

  return (
    <Wrapper title={t.navBar.greet}>
      <h1 className={styles.title}> send greetings</h1>
      <div className={styles.formContainer}>
        <TextField
          type="text"
          id="name"
          name="name"
          placeholder={t.greetPage.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder={t.greetPage.message}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button disabled={!name || !message} onClick={handleSendGreeting}>
          {t.greetPage.send}
        </button>
      </div>
      <div className={styles.greetingsContainer}>
        {loading ? (
          <p className={styles.loading}>{t.greetPage.loading}</p>
        ) : (
          <Greetings messages={messages} />
        )}
      </div>
    </Wrapper>
  );
};

export default Greet;
