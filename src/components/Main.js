import React from 'react';
import Profile from './Profile';
import Gallery from './Gallery';



export default function Main() {
  return (
    <React.Fragment>
      <div className='container'>
        <Profile />
        <Gallery />
      </div>
    </React.Fragment>
  )
}
