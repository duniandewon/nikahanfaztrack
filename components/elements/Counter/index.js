import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import en from "../../../public/locales/en/translate";
import id from "../../../public/locales/id/translate";

import styles from "./Counter.module.scss";

const Counter = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : id;

  const getTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`Oct 24, ${year} 10:00:00`) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.counter}>
      <div className={styles.count}>
        <span>{timeLeft.days}</span>
        <span>{t.counter.day}</span>
      </div>
      <div className={styles.count}>
        <span>{timeLeft.hours}</span>
        <span>{t.counter.hour}</span>
      </div>
      <div className={styles.count}>
        <span>{timeLeft.minutes}</span>
        <span>{t.counter.minute}</span>
      </div>
      <div className={styles.count}>
        <span>{timeLeft.seconds}</span>
        <span>{t.counter.seconds}</span>
      </div>
    </div>
  );
};

export default Counter;
