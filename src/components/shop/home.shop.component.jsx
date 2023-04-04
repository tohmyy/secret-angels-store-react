import React from 'react'
import MainShop from './main.shop.component'
import SHOP_DATA from '../../data/shop-data.json'
import { useContext } from 'react'
import { ProductsContext } from '../../context/products.context'

const ShopHome = () => {
    const {products} = useContext(ProductsContext)
  return (
    <div style={{padding: '0px 30px' }}>
      <MainShop shopData={products}/>
    </div>
  )
}

export default ShopHome
