import React, { useContext } from 'react'
import Shop from './shop.component'

import { Fragment } from 'react'
// import CategoryPreview from '../category-preview/category-preview.component'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component'
import Category from '../../routes/category/category.component'

import { CategoriesContext } from '../../context/categories.context'

import {ShopContainer}  from './shop.styles.jsx'

const MainShop = () => {
  const {categoriesItems} = useContext(CategoriesContext) 
  return (
    <ShopContainer style={{padding: '0px 30px' }}>

    <Routes>
      <Route index   element={<CategoriesPreview/>}/>
      <Route  path=':category' element={<Category categoriesItems={categoriesItems}/>}/>
    </Routes>

    </ShopContainer>
  )
}
// const MainShop = ({categoriesItems}) => {
//   return (
//     <div className='shop-container'>   
//         {
//           Object.keys(categoriesItems).map(title =>{
//             const products = categoriesItems[title];
//             return <CategoryPreview key={title} title={title} products={products} />




//             // <Fragment key={title}>
//             //   <h2>{title}</h2>
//             //   <div className="shop-container">
//             //     {categoriesItems[title].map((item)=>(
//             //       <Shop key={item.id} item={item}/>
//             //       // <Shop key={item.id} item={item}/>
//             //     ))   
//             //   }   
//             // </div>
//             // </Fragment>
//           })} 
    
//       {/* <h2>HATS</h2> */}
     
//       </div>

    
//   )
// }

export default MainShop
