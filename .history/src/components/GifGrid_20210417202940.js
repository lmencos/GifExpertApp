import React from 'react'

export const GifGrid = ( { category } ) => {

  const getGifs = ()  => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=12&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf'
    
  };

  return (
    <div>
      <h3> { category } </h3>
    </div>
  )
}
