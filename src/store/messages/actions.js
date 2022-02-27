import { AUTHORS } from "../../utils/constants";

const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
const DEL_MESSAGES = "MESSAGES::DEL_MESSAGES";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

let timeout;

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));
  if (message.author !== AUTHORS.BOT) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const botMessage = {
        author: AUTHORS.BOT,
        message: "Hello from bot",
        date: new Date(),
      };
      dispatch(addMessage(chatId, botMessage));
    }, 200);
  }
};

export const delMessages = (chatId) => ({
  type: DEL_MESSAGES,
  chatId,
});
