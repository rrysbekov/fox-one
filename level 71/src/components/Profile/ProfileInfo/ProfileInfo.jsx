import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

  return (
    <div>
      {/* <div>
        <img src='https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-162d8e9138a.jpg?crop=true&width=1020&height=498' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={'Hello my friends!'} />
      </div>
    </div>
  )
}

export default ProfileInfo;
