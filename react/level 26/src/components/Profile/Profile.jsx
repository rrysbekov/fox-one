import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 25}
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile;
