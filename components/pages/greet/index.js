import { useState } from "react";

import useSwr from "../../../utils/useSwr";

import Wrapper from "../../layout/Wrapper";
import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";
import Language from "../../elements/Language";
import TextField from "../../elements/TextField";
import TextArea from "../../elements/TextArea";
import Greetings from "../../elements/GreetingsList";

import styles from "./Greet.module.scss";

const Greet = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
    <Wrapper>
      <h1 className={styles.title}> send greetings</h1>
      <div className={styles.formContainer}>
        <TextField
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="message"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button disabled={!name || !message} onClick={handleSendGreeting}>
          send
        </button>
      </div>
      <div className={styles.greetingsContainer}>
        {loading ? (
          <p className={styles.loading}>loading all your beatifull messages</p>
        ) : (
          <Greetings messages={messages} />
        )}
      </div>
      <Language />
      <Footer />
      <Navbar />
    </Wrapper>
  );
};

export default Greet;
