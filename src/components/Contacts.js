import React from 'react';


function Contacts(props) {
  const {imageUrl, name,button} = props;
  return (
    <div className='contactFlex'>
      <div>
        <img className='contactImage' src={imageUrl} alt="image"/>
      </div>
      <div>
        <h3>{name}</h3>
        <button className='btn'>{button}</button>
        <hr></hr>
      </div>
  
    </div>
  )
}

export default Contacts