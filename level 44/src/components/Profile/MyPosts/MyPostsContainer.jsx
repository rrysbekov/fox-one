import React from 'react';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../redux/StoreContext';

const MyPostsContainer = (props) => {
  // let state = props.store.getState();

  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }

        return <MyPosts  addPost={addPost}
              updateNewPostText={onPostChange}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}/>
            }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
