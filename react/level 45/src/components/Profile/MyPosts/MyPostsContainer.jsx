import React from 'react';
// import s from './MyPosts.module.css';
// import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
// import StoreContext from '../../../redux/StoreContext';

// const MyPostsContainer = (props) => {
//   // let state = props.store.getState();
//   // let addPost = () => {
//   //   props.store.dispatch(addPostActionCreator());
//   // }

//   // let onPostChange = (text) => {
//   //   let action = updateNewPostTextActionCreator(text);
//   //   props.store.dispatch(action);
//   // }

//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         }

//         return <MyPosts  updateNewPostText={onPostChange}
//                   addPost={addPost}
//                   posts={state.profilePage.posts}
//                   newPostText={state.profilePage.newPostText} />
//                 }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
