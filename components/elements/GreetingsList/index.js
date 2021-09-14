import { useState } from "react";
import styles from "./GreetingsList.module.scss";

const messages = [
  {
    id: "vgh",
    name: "karima",
    message:
      "Bismillahirrahmannirrahiim Selamat menempuh hidup baru saviq & kareema, semoga Allah SWT menyempurnakan kebahagiaan kalian berdua dan menyempurnakan ibadah kalian. Baarakallahu laka wa baaraka 'alaika wa jama'a bainakumaa fi khoir', amin",
    time: "2 hari lalu",
  },
  {
    id: "dtj",
    name: "athia",
    message:
      "Masya Allah!Mabruk Saviq&Kareema!Congratulation to my lovely nephew!In shaa Allah you will make it a Happy Family….I wish i will be there!Love you Both!❤️",
    time: "2 hari lalu"
  },
];

const GreetingsList = () => {
  const [greetings, setGreetings] = useState(messages);

  const _renderGreetings = () => {
    return greetings.map(({ id, name, message, time }) => (
      <div className={styles.container} key={id}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.message}>{message}</p>
        <p className={styles.time}>{time}</p>
      </div>
    ));
  };

  const _renderNoGreeting = () => <h2>Be the first to say hi</h2>;

  return greetings && !!greetings.length
    ? _renderGreetings()
    : _renderNoGreeting();
};

export default GreetingsList;
