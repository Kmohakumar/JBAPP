import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/login';

function App() {
  return (
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="order-confirmed" element={<Order/>} />
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path="featured" element={<FeaturedProducts/>}></Route>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
        </Route>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      </AuthProvider>
  );
}

export default App;