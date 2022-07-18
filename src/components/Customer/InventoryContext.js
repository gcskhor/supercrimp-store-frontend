import React, { useContext, useEffect, useState } from 'react';
import { BackendCall } from '../../store.js';

const InventoryContext = React.createContext();

export function useInventoryContext() {
  return useContext(InventoryContext);
}

export function InventoryContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [availableColours, setAvailableColours] = useState([]);

  useEffect(() => {
    BackendCall.get(`/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    BackendCall.get(`/colours`)
      .then((response) => {
        setAvailableColours(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <InventoryContext.Provider value={{ products, availableColours }}>
      {children}
    </InventoryContext.Provider>
  );
}
