import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Samurai X', 'Mazinger Z', 'Rick and Morty' ]);

  return (
    <>
      <h3>Gif Expert App</h3> 
      <AddCategory  setCategories={ setCategories } />
      <hr/> 

      <ol>
        { 
          categories.map( category => 
            <li key={ category } >{ category }</li>
          ) 
        }
      </ol>

    </>
  )
}
