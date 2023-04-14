import {CategoryContainer, CategoryTitle} from './category.styles.jsx'

import { useParams } from 'react-router-dom'
import { Fragment, useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import Shop from '../../components/shop/shop.component'
const Category = () => {
  const {category} = useParams()
  const {categoriesMap} = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=>{
        console.log(category)
        console.log(categoriesMap)
        console.log(products)
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    
    // const products = categoriesMap[category]

    return (
    <Fragment>
        <CategoryTitle><h2>{category.toUpperCase()}</h2></CategoryTitle>
        <CategoryContainer>
        { products &&
            products.map((product)=> <Shop key={product.id} item={product}/>)
        }
        </CategoryContainer>
    </Fragment>

  )
}

export default Category
