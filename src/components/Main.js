import React from 'react';
import Profile from './Profile';
import Gallery from './Gallery';
import ContactBook from './ContactBook';



export default function Main() {
  return (
    <React.Fragment>
      <div className='container'>
        <Profile />
        <Gallery />
        <ContactBook />
      </div>
    </React.Fragment>
  )
}
