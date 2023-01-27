import { Routes, Route } from 'react-router-dom';
import Catagory from './components/Catagory/Catagory';

import Layout from './components/Layout/Layout';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import CatagoryPage from './pages/CatagoryPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/product' element={<ProductPage />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/catagory/:id' element={<CatagoryPage/>}/>
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
