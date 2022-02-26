import {
  /* Navigate, */ useParams /* , useNavigate */,
} from "react-router-dom";
/* import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"; */
import { Message } from "./message";
import { InputForm } from "./input";
import { useStyles } from "./use-styles";
import { AUTHORS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { useEffect } from "react";
import { messsagesSelector } from "../../store/messages/selectors";

export const MessageList = (/* { messages , sendMessage } */) => {
  const { roomId } = useParams();
  const styles = useStyles();
  /* const [messages, setMessages] = useState({}); */
  /*   const navigate = useNavigate(); */

  const messageList = useSelector(messsagesSelector);
  const dispatch = useDispatch();

  function sendMessage(value) {
    if (value) {
      dispatch(
        addMessage(roomId, {
          author: AUTHORS.USER,
          message: value,
          date: new Date(),
        })
      );
      /*       setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] ?? []),
          { author: AUTHORS.USER, message: value, date: new Date() },
        ],
      }); */
      /*       setValue(""); */
    }
  }

  useEffect(() => {
    const roomMessages = messageList[roomId] ?? [];
    const lastMessage = roomMessages[roomMessages.length - 1];
    let timerId = null;

    if (roomMessages.length && lastMessage.author !== AUTHORS.BOT) {
      timerId = setTimeout(() => {
        dispatch(
          addMessage(roomId, {
            author: AUTHORS.BOT,
            message: "Hello from bot",
            date: new Date(),
          })
        );
      }, 200);
    }
    return () => clearInterval(timerId);
  }, [messageList, roomId, dispatch]);

  const roomMessages = messageList[roomId] ?? [];

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
