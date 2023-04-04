import React from 'react'
import Shop from './shop.component'
const MainShop = ({shopData}) => {
  return (<>
    <h2>HATS</h2>
    <div className="shop-container">
        
        {shopData.map((item, {id})=>(
            <Shop key={id} item={item}/>
            // <Shop key={item.id} item={item}/>
        )

        )   }   
    </div>
    </>
  )
}

export default MainShop
