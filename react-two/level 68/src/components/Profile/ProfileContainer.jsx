import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';


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
  }

  render(){
    if(this.props.isAuth === false) return <Navigate to={'/login'} />

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));

// a1073c67-84e7-490b-a52a-12d91b0821bb
