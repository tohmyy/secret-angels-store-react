// import logo from './logo.svg';
import './App.css';
// import './categories.styles.scss'
import Home from './routes/home/home.component';
import Navigation from './routes/header/header.component';
import Authentication from './routes/authentication/authentication.component';
import Main from './components/main/main.component';
import { Routes, Route, Outlet } from 'react-router-dom';
import SignUp from './components/sign-up/sign-up.component';

import ShopHome from './components/shop/home.shop.component';
import MainShop from './components/shop/main.shop.component';
import Checkout from './components/checkout/checkout.component';
import CheckoutMain from './routes/checkout-main/checkout-main.component';

const App = ()=> {

return(
  <>
  {/* <Navigation/> */}
<Routes>
  <Route path='/' element={<Navigation/>}> 
    <Route index element={<Home/>}/>
    <Route path='auth' element={<Authentication/>}/>
    <Route path='signUp' element={<SignUp/>}/>
    <Route path='shop/*' element={<MainShop/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='checkout-main' element={<CheckoutMain/>}/>
  </Route>
</Routes>
</>
 
)
  
}

export default App;
