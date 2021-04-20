import React, { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = ( e ) => {
    setInputValue( e.target.value )
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setCategories( (cats) => [ inputValue, ...cats ]);
  };

  return (
    <form onSubmit={ handleSubmit } >
      <input 
        onChange={ handleInputValue }
        type="text" 
        value={ inputValue }
      /> 
    </form>
  )
}
