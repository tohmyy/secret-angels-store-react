// import logo from './logo.svg';
// import './Home.css';

import '../../components/main/main.styles.scss'
import Main from '../../components/main/main.component';
import Shop from '../../components/shop/shop.component';
// import Header from './components/header/header.component';
// import CategoryItem from './components/category-item/category-item.component';
// import categories from './data/categories.json'

const Home = ()=> {


  const categories = [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
  ]



  return (
    <>
    {/* <Header/> */}
    <Main categories={categories}/>
    
    </>
  
  );
}

export default Home;
