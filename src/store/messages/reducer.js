const initialState = { messageList: {} };

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGES::ADD_MESSAGE": {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [...currentList, { ...action.message }],
        },
      };
    }

    case "MESSAGES::DEL_MESSAGES": {
      const currentMessageList = state.messageList;
      delete currentMessageList[action.chatId];
      return {
        ...state,
        messageList: {
          ...currentMessageList,
        },
      };
    }

    default:
      return state;
  }
};
