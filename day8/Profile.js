import "./Profile.css"
import React from 'react'
import {db} from "./firebase"

function Profile() {
  return (
    <div className="profile">
      <div className="basic-info">
        <div className="img-container">
          <img
            className="profile-picture"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            alt="your photo"
          />
        </div>
        <div className="profile-text-info">
          <div className="profile-info-line">
            <h1 className="username-text">Username</h1>
          </div>
          <div className="profile-info-line">
            <h2 className="e-mail-text">E-mail</h2>
          </div>
          <div className="profile-info-line">
            <h4 className="password-text">Password</h4>
          </div>
          <div className="profile-info-line">
            <p className="dateInfo-text">You've been using our services since </p>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h1>Building</h1>
      </div>
    </div>
  )
}

export default Profile
