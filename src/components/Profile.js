import React from 'react';
import User from "./../img/user-icon.png"

export default function Profile() {
  return (
    <React.Fragment >
      <div className='display'>
      <div class='card'>
        <div className="card-background"></div>
        <div className='profile-image'>
          <img src={User} width="50px" alt='user icon'/>
          <h3>Daniya Yelemessova</h3>
        </div>
        <div className='card-content'>
          <ul>
            <li>TWEETS</li>
            <li>FOLLOWING</li>
            <li>FOLLOWERS</li>
          </ul>
        </div>
      </div>

      <div className='card-2'>
          <p>
          Web Developer || Software Engineer || HTML5/CSS3 | Bootstrap 5.2 | WordPress| JavaScript | React | C# & .NET
          </p>
        </div>
        </div>
      
    </React.Fragment>
  )
}
