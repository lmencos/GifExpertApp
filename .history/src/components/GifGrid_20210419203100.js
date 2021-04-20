import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  const { data:images, loading } = useFetchGifs( category );

  console.log(loading);

  return (
    <>
      <h3 className="animate__animated animate__backInDown"> { category } </h3>

      { loading && <p className="loadingText animate__animated animate__flash">Buscando 12 Gifs de: { category.trim() }</p> }

      <div className="card-grid" >
          { images.map( (img) => 
             <GifGridItem 
                key={ img.id }
                img={ img } 
                { ...img }
              />
          )}
      </div>
    </>
  )
}
