import React from 'react'

export const GifGrid = ( { category } ) => {

  const getGifs = async()  => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=12&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf'
    const resp = await fetch( url );
    const { data } = await resp.json();

    console.log(data)
  };

  getGifs();

  return (
    <div>
      <h3> { category } </h3>
    </div>
  )
}
