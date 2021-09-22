/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {

    const [followed, setFollowed] = useState(false);
    
    async function handleFollowUser() {
        setFollowed(true);
        // implementation of following users
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
          <div className="flex items-center justify-between">
            <img
            style={{height:'32px',objectFit:'contain'}}
              className="rounded-full w-8 flex mr-3"
              src={`/images/avatars/${username}.jpg`}
              alt=""
              onError={(e) => {
                e.target.src = `/images/avatars/default.png`;
              }}
            />
            <Link to={`/p/${username}`}>
              <p className="font-bold text-sm">{username}</p>
            </Link>
          </div>
          <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
        </div>
      ) : null;
    
}

export default SuggestedProfile

SuggestedProfile.PropTypes = {
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
}