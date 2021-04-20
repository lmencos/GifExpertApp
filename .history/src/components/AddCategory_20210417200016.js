import React, { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputValue = ( e ) => {
    setInputValue( e.target.value )
  };

  const handleSubmit = ( e ) => {

  };

  return (
    <form>
      <input 
        onChange={ handleInputValue }
        type="text" 
        value={ inputValue }
      /> 
    </form>
  )
}
