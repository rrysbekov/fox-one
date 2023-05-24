import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1669106234832239125/0B4309CBBA999372541D168289519A74E2C81DB2/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
      // {id: 2, photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1669106234832239125/0B4309CBBA999372541D168289519A74E2C81DB2/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
      // {id: 3, photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1669106234832239125/0B4309CBBA999372541D168289519A74E2C81DB2/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    ])
  }
  debugger;
  return (
    <div>
      {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={styles.userPhoto}/>
          </div>
          <div>
            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
      }
    </div>
  )
}

export default Users;
