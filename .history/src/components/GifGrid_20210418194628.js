import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  // const [images, setImages] = useState([]);

  const { loading } = useFetchGifs();

  console.log(loading);

  // useEffect( () => {
  //   getGifs( category )
  //     .then( setImages )
  // }, [ category ]);

  return (
    <>
      <h3> { category } </h3>

      { loading ?  'Cargando...' :  'Fin de carga' } 
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
