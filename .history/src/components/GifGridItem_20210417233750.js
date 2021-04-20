import React from 'react';

export const GifGridItem = ( { id, title, imageUrl } ) => {
  // console.log( id, title, imageUrl)

  return (
    <div className="card" >
      <img 
        alt={ title }
        src={ imageUrl }
      />
      {
        title.trim().length > 40 ? <p>{'Rick and Morty'}</p>  : <p>{ title }</p>
      }
      
    </div>
  )
}
