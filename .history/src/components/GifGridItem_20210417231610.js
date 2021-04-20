import React from 'react';

export const GifGridItem = ( { id, title, imageUrl } ) => {
  // console.log( id, title, imageUrl)

  return (
    <div className="card" >
      <img 
        src={ imageUrl }
        alt={ title }
      />
      <p>{ title }</p>
    </div>
  )
}
