import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileSection from './ProfileSection'

function Profile() {
  return (
    <div>
        <div>
            <ProfileHeader/>
        </div>
        <div className='bg-[#0d2539]'>
            <ProfileSection/>
        </div>
    </div>
  )
}

export default Profile