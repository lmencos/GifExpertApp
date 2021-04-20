import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  const { loading } = useFetchGifs( category );

  console.log(loading);

  return (
    <>
      <h3> { category } </h3>

      { loading ?  'Cargando...' :  'Data cargada' } 
      {/* <div className="card-grid" >
          { images.map( (img) => 
             <GifGridItem 
                key={ img.id }
                img={ img } 
                { ...img }
              />
          )}
      </div> */}
    </>
  )
}
