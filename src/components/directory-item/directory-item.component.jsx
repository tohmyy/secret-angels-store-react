import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)
  return (

    <>
    {/* {img} */}
    {/* <img src={imageUrl} alt="background-logo" height="100%" width="100%"/> */}
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </Body>

       </DirectoryItemContainer>
         </>   
        
  )
}

export default DirectoryItem
