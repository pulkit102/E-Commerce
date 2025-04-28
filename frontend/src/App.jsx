import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/cart'
import Login from './pages/login'
import Placeorder from './pages/placeorder'
import Orders from './pages/orders'
import Navbar from './components/navbar'
//import Hero from './components/Hero'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      {/*<Hero/>*/}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='place-order' element={<Placeorder/>}/>
        <Route path='/orders' element={<Orders/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}


export default App