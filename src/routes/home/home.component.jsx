// import logo from './logo.svg';
// import './Home.css';
import '../../components/main/main.styles.scss'
import Main from '../../components/main/main.component';
// import Header from './components/header/header.component';
// import CategoryItem from './components/category-item/category-item.component';
// import categories from './data/categories.json'

const Home = ()=> {


  const categories = [
    {
      id: 1,
      title: "Shoes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 2,
      title: "Hoodies",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Tuxedos",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
    {
      id: 4,
      title: "Casuals",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "Accessories",
      
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
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
