import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { usersAPI } from '../../api/api';


export function withRouter(Children){
  return(props)=>{
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    // usersAPI.getProfile(userId)
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    // .then(response => {
    //   this.props.setUserProfile(response.data);
    // });
  }

  render(){
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));

// a1073c67-84e7-490b-a52a-12d91b0821bb
