import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

// let updateNewPostTextActionCreator = (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT', newText: text
//   }
// }

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    // props.addPost();
    props.dispatch(addPostActionCreator());
    // props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // console.log(text);
    // props.updateNewPostText(text);
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
