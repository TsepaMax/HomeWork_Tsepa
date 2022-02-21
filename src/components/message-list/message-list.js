import React, { useEffect, /* useRef, */ useState } from "react";
import {
  /* Navigate, */ useParams /* , useNavigate */,
} from "react-router-dom";
/* import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"; */
import { Message } from "./message";
import { InputForm } from "./input";
import { useStyles } from "./use-styles";
import { AUTHORS } from "../../utils/constants";

export const MessageList = (/* { messages }, { sendMessage } */) => {
  const { roomId } = useParams();
  const styles = useStyles();
  const [messages, setMessages] = useState({});
  /*   const navigate = useNavigate(); */

  function sendMessage(value) {
    if (value) {
      setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] ?? []),
          { author: AUTHORS.USER, message: value, date: new Date() },
        ],
      });
      /*       setValue(""); */
    }
  }

  useEffect(() => {
    const roomMessages = messages[roomId] ?? [];
    const lastMessage = roomMessages[roomMessages.length - 1];
    let timerId = null;

    if (roomMessages.length && lastMessage.author !== AUTHORS.BOT) {
      timerId = setTimeout(() => {
        setMessages({
          ...messages,
          [roomId]: [
            ...messages[roomId],
            {
              author: AUTHORS.BOT,
              message: "Hello from bot",
              date: new Date(),
            },
          ],
        });
      }, 200);
    }
    return () => clearInterval(timerId);
  }, [messages, roomId]);

  const roomMessages = messages[roomId] ?? [];

  /*   if () {
    return navigate("/chat");
  } */

  return (
    <div className={styles.wrapper}>
      {roomMessages.map((message, index) => (
        <Message message={message} key={index} />
      ))}

      <InputForm onSubmit={sendMessage} />

      {/*       <Input
        fullWidth
        className={styles.input}
        inputRef={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={sendMessage} />
          </InputAdornment>
        }
      /> */}
    </div>
  );
};
