import './App.scss';
import PageContainer from './components/PageContainer/PageContainer.jsx';
import Home from './pages/Home/Home.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
import Cart from './pages/Cart/Cart.jsx';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataThunk } from "./store/actions.js";

function App() {
  const dispatch = useDispatch();

  // Get data with fetch
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cart = useSelector((state) => state.data.cart);
  const favorites = useSelector((state) => state.data.favorites);

  // Save cart in Local Storage on every change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  // Save favorites in Local Storage on every change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  // Routing
  return (
    <PageContainer>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </PageContainer>
  );
}

export default App;