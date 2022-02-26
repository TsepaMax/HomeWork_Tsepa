const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
const DEL_MESSAGES = "MESSAGES::DEL_MESSAGES";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

export const delMessages = (chatId) => ({
  type: DEL_MESSAGES,
  chatId,
});
