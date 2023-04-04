// import logo from './logo.svg';
import './App.css';
import './categories.styles.scss'
import Home from './routes/home/home.component';
import Navigation from './routes/header/header.component';
import Authentication from './routes/authentication/authentication.component';
import Main from './components/main/main.component';
import { Routes, Route, Outlet } from 'react-router-dom';
import SignUp from './components/sign-up/sign-up.component';

import ShopHome from './components/shop/home.shop.component';

const App = ()=> {

return(
  <>
  {/* <Navigation/> */}
<Routes>
  <Route path='/' element={<Navigation/>}> 
    <Route index element={<Home/>}/>
    <Route path='auth' element={<Authentication/>}/>
    <Route path='signUp' element={<SignUp/>}/>
    <Route path='shop' element={<ShopHome/>}/>
    
  </Route>
</Routes>
</>
 
)
  
}

export default App;
