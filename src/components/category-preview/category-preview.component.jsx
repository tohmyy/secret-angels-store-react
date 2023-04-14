
import Shop from '../shop/shop.component';
import { Link } from 'react-router-dom';

import {CategoryLink, CategoryPreviewContainer, PreviewContainer, TitleContainer} from './category-preview.styles.jsx'

const CategoryPreview = ({title, products}) => {
    return(
        <CategoryPreviewContainer>
            <CategoryLink to={title}>
                <h2>
                    <TitleContainer as='span'>{title.toUpperCase()}</TitleContainer>
                </h2>
            </CategoryLink>
            
            <PreviewContainer>
                {
                products.filter((_, idx)=> idx<4).map((product)=> <Shop key={product.id} item={product}/>)
                }
            </PreviewContainer>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;