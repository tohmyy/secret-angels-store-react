import React from 'react'
import Button from '../button/button.component'
import './shop.styles.scss'
const Shop = ({item}) => {
    const {id, name, imageUrl, price} = item
  return (
    <>
    

        <div className="items-container">
            <div className="item-box">
                
                <div className="img-box">
                    <img src={`${imageUrl}`} alt="" width='100%' height='100%' name={name}/>
                    <Button buttonType={'inverted'}>ADD TO CART</Button>
                </div>
                <div className="text-box">
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>


</>
  )
 
}

export default Shop



