import React, { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Samurai X', 'Mazinger Z', 'Rick and Morty' ]);

  const handleAgregar =() => {
    setCategories( (cats) => [ 'Naruto', ...cats ]);
  };

  return (
    <>
      <h3>Gif Expert App</h3>
      <hr/> 

      <button onClick={ handleAgregar } >Agregar</button>

      <ol>
        { 
          categories.map( category => 
            <li key={ category } > { category } </li> 
          ) 
        }
      </ol>

    </>
  )
}
