import { createContext, useState, useEffect } from "react";
import { Value } from "sass";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from '../data/shop-data.js';

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children})=>{
    // const [product, setProduct] = useState(SHOP_DATA)
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
            // console.log(categoryMap) 
        }
        getCategoriesMap()
    }, [])
    
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    //     // we pass in the name of the collection , and the particular data (object) and parameters 
    //     // to create the collection and document in the firebase
    // }, [])

    const value= {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}