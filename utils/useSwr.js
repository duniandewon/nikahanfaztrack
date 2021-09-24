import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from 'axios'

const useSwr = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const { data, error } = useSWR("/api/greet");

  const { mutate } = useSWRConfig();

  const sendGreeting = async ({ name, message }) => {
    mutate("/api/greet", { data: [...data.data, { name, message }] }, false);

    await axios.post("/api/greet", { name, message });

    mutate("/api/greet");
  };

  useEffect(() => {
    if (data && !error) {
      setLoading(false);
      setMessages(data.data.reverse());
    }
  }, [data]);
  return { messages, loading, sendGreeting };
};

export default useSwr;
