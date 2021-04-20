import React, { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Samurai X', 'Mazinger Z', 'Rick and Morty' ]);

  return (
    <>
      <h3>Gif Expert App</h3>
      <hr/> 

      <ol>
        { 
          categories.map( cat => {
            return <li key={ cat } > { cat } </li> 
          }) 
        }
      </ol>

    </>
  )
}
