import React from 'react';
import ImageContact from "../img/user-icon.png";
import Contacts from './Contacts';

function ContactBook() {
  return (
    <div className='contactBook'>
      <h2>Contacts</h2>
      <Contacts
      imageUrl={ImageContact}
      name="George Merty"
      button="Add"
    />

    <Contacts
      imageUrl={ImageContact}
      name="David Borsman"
      button="Add"
    />
    <Contacts
      imageUrl={ImageContact}
      name="Erik Fantasu"
      button="Add"
    />
    </div>
  )
}

export default ContactBook