import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = () => {

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect( () => {

    getGifs()

  }, [])

  return state; // { data: [], loading: true }

};