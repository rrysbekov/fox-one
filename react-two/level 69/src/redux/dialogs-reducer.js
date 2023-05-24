const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY, body: text
  }
}

export default dialogsReducer;
