// import logo from './logo.svg';
import './App.css';
import './categories.styles.scss'
import Main from './components/main/main.component';
// import CategoryItem from './components/category-item/category-item.component';
// import categories from './data/categories.json'

const App = ()=> {


  const categories = [
    {
      id: 1,
      title: "Shoes",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "Swim Wear",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Tuxedos",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "Gym Wears",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "Accessories",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    }
]


  return (
  <Main categories={categories}/>
  );
}

export default App;
