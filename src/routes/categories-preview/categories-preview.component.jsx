
// import Shop from '../../components/shop/shop.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Fragment, useContext } from 'react';
// import Shop from '../shop/shop.component';
import { CategoriesContext } from '../../context/categories.context';



const CategoriesPreview = () => {
    
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <Fragment>   
        {
          Object.keys(categoriesMap).map(title =>{
            const products = categoriesMap[title];
            return (
                <CategoryPreview 
                    key={title} 
                    title={title} 
                    products={products} />
                )




            // <Fragment key={title}>
            //   <h2>{title}</h2>
            //   <div className="shop-container">
            //     {categoriesItems[title].map((item)=>(
            //       <Shop key={item.id} item={item}/>
            //       // <Shop key={item.id} item={item}/>
            //     ))   
            //   }   
            // </div>
            // </Fragment>
          })} 
    
      {/* <h2>HATS</h2> */}
     
      </Fragment>

    
  )
}

export default CategoriesPreview








// const CategoryPreview = ({title, products}) => {
//     return(
//         <div className='category-preview-container'>
//             <h2>
//                 <span className='title'>{title.toUpperCase()}</span>
//             </h2>
//             <div className='preview'>
//                 {
//                 products.filter((_, title)=> title===title).map((product)=> <Shop key={product.id} item={product}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default CategoryPreview;



