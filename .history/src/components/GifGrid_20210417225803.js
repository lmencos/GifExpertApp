import React, { useState, useEffect } from 'react'

export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs();
  }, []);

  const getGifs = async()  => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=12&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf'
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return{
        id: img.id,
        title: img.title,
        imageUrl: img.images?.downsized_medium.url,
      }
    });
    console.log(gifs);
    setImages( gifs );
  };

  return (
    <div>
      <h3> { category } </h3>
      <ol>
        { images.map( (img) => {
           return <li key={ img.id }>{ img.title }</li>
        })}
      </ol>
    </div>
  )
}
