import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const API = "http://localhost:8000/cards";

const ProductsContext = ({ children }) => {
    const [products , setProducts] = useState([]);
    const getProducts = async (url) => {
        try {
            const res = await axios.get(url);
            const products = await res.data;
            setProducts(products);
        } catch {
            console.log('Error with the server!')
        }
    };

    useEffect(() => {
        getProducts(API);
    }, [])


    return ( 
        <AppContext.Provider value={{products}} >
            {children}
        </AppContext.Provider>
     );
};

const useProductContext = () => {
    return useContext(AppContext);
  };
 
export { ProductsContext, useProductContext, AppContext};