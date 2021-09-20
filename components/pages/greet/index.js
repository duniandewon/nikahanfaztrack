import { useEffect, useState } from "react";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

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
  const [messages, setMessages] = useState([]);

  const { mutate } = useSWRConfig();
  const { data } = useSWR("https://nikahanfaztrack-gibz8drwf-duniandewon.vercel.app//api/greet");

  const resetForm = () => {
    setName("");
    setMessage("");
  };

  const sendGreeting = async () => {
    mutate(
      "https://nikahanfaztrack-gibz8drwf-duniandewon.vercel.app//api/greet",
      { data: [...data.data, { name, message }] },
      false
    );

    await axios.post("https://nikahanfaztrack-gibz8drwf-duniandewon.vercel.app//api/greet", { name, message });

    mutate("https://nikahanfaztrack-gibz8drwf-duniandewon.vercel.app//api/greet");

    resetForm();
  };

  useEffect(() => {
    data && setMessages(data.data);
  }, [data]);

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
        <button disabled={!name || !message} onClick={sendGreeting}>
          send
        </button>
      </div>
      <div className={styles.greetingsContainer}>
        <Greetings messages={messages} />
      </div>
      <Language />
      <Footer />
      <Navbar />
    </Wrapper>
  );
};

export default Greet;
