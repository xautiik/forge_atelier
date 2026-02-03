import React from 'react';
import Link from 'next/link';

const UserCard = ({ username, profilePhoto, firstName, lastName, jobTitle }) => {
    return(
        <>
        <div className="user-profile-card">
            <div className="card-header">
            <img src={profilePhoto || "/images/default-profile.png"} alt={`${firstName} ${lastName}`} />
                <h3>{firstName} {lastName}</h3>
                <small>{jobTitle}</small>
            </div>
            <Link href={`/admin/users/${username}`}>
              <button className='button-primary'>View Profile</button>
            </Link>
        </div>
        </>
    )
}

export default UserCard