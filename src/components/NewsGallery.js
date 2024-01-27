import React from 'react';

function NewsGallery(props) {
  const { imageUrl, name, introduction, accomplishment} = props;
  return (
    <React.Fragment>
      <div className="flex">
        <img src={imageUrl} alt="image" className='newsImage' />
        <div className='width'>
          <h2>{name}</h2>
          <p>{introduction}</p>
          <hr></hr>
          <p>{accomplishment}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewsGallery