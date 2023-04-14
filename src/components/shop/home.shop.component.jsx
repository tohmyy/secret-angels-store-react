import React from 'react'
import MainShop from './main.shop.component'
import SHOP_DATA from '../../data/shop-data.json'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'

import {ShopContainer }  from './shop.styles.jsx'

const ShopHome = () => {
    const {categoriesMap} = useContext(CategoriesContext)
  return (
    

    <ShopContainer style={{padding: '0px 30px' }}>
      <MainShop categoriesItems={categoriesMap}/>
      {/* <MainShop shopData={products}/> */}
    </ShopContainer>
  )
}

export default ShopHome
