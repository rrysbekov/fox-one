import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 25}
      ],
      newPostText: 'Japan'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State was changed!');
  },


  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  // _addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   }
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // _updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0
    //   }
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = '';
    //   this._callSubscriber(this._state);
    // }
    // else if(action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // }
    // else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._callSubscriber(this._state);
    // }
    // else if(action.type === SEND_MESSAGE) {
    //   let body = this._state.dialogsPage.newMessageBody;
    //   this._state.dialogsPage.newMessageBody = '';
    //   this._state.dialogsPage.messages.push({id: 6, message: body});
    //   this._callSubscriber(this._state);
    // }
  },
}

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// }

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT, newText: text
//   }
// }

// export const sendMessageCreator = () => {
//   return {
//     type: SEND_MESSAGE
//   }
// }

// export const updateNewMessageBodyCreator = (text) => {
//   return {
//     type: UPDATE_NEW_MESSAGE_BODY, body: text
//   }
// }


export default store;
window.store = store;
