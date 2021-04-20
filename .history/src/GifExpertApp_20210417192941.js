import React, { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Samurai X', 'Mazinger Z', 'Rick and Morty' ]);

  return (
    <>
      <h3>Gif Expert App</h3>
      <hr/> 

      <ol>
        { 
          categories.map( category => {
            return <li key={ category } > { category } </li> 
          }) 
        }
      </ol>

    </>
  )
}
