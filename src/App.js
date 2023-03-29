// import logo from './logo.svg';
import './App.css';
import './categories.styles.scss'
import Home from './routes/home/home.component';
import Navigation from './routes/header/header.component';
import SignIn from './routes/sign-in/sign-in.component';
import Main from './components/main/main.component';
import { Routes, Route, Outlet } from 'react-router-dom';

const App = ()=> {

return(
  <>
  {/* <Navigation/> */}
<Routes>
  <Route path='/' element={<Navigation/>}> 
    <Route index element={<Home/>}/>
    <Route path='signIn' element={<SignIn/>}/>
    
  </Route>
</Routes>
</>
 
)
  
}

export default App;
