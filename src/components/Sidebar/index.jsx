/* eslint-disable no-unused-vars */
import React from 'react';
import useUser from '../../hooks/useUser';
import Suggestions from './Suggestions';
import User from './User';


const Sidebar = () => {
    
    const { user: { fullName, username, userId, following }} = useUser();

    return (
        <div className="p-4">
            <User username={username} fullName={fullName}/>
            <Suggestions userId={userId} following={following}/>
        </div>
    )
}

export default Sidebar
