import React from 'react';
import NewsGallery from './NewsGallery';
import ImageUser from "../img/user-icon.png";
import NewsHeader from './NewsHeader';



function Gallery() {
  return (
    <div className='gallery-container'>
      <NewsHeader />
      <NewsGallery
      imageUrl={ImageUser}
      name="Alex David"
      introduction="Recruitment specialist at Crypto"
      />
      <hr></hr>
      <NewsGallery
      imageUrl={ImageUser}
      name="Ivan Moto"
      introduction="Leading Engineering Teams"
      accomplishment="Helping Career Changers "/>
      <hr></hr>
      <NewsGallery
      imageUrl={ImageUser}
      name="Ray Morrison"
      introduction="Software Engineer II | Freelance Narrator | Father of 5"
      accomplishment="Affordable Career Coaching"
    />
      <hr></hr>
      <NewsGallery
      imageUrl={ImageUser}
      name=" Harley Ferguson"
      introduction="I teach developers how to accelerate their careers | Co-Founder & CEO at Origen Software"
    />
      <hr></hr>
    </div>
  )
}

export default Gallery