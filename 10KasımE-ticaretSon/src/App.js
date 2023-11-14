
import './App.css';
import Header from './Header';
import Category from './Category';
import Urunler from './Urunler';
import React, { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  const [cardItems, setcartItems] = useState([
    {id: 1, name:'Gömlek', price:'100TL', cat:'Üst Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 2, name:'Kazak', price:'100TL', cat:'Üst Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 3, name:'Elbise', price:'100TL', cat:'Üst Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 4, name:'Pantolon', price:'100TL', cat:'Alt Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 5, name:'Etek', price:'100TL', cat:'Alt Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 6, name:'Kaban', price:'100TL', cat:'Dış Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 7, name:'Yağmurluk', price:'100TL', cat:'Dış Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 8, name:'Mont', price:'100TL', cat:'Dış Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'},
    {id: 9, name:'Gömlek', price:'100TL', cat:'Üst Giyim', image:'https://cache.manuka.com.tr/product/cache/524x788_-48468-86-B.jpg'}
  ])

  const [kategoriler] = useState([
    { id: 1, ad: "Dış Giyim" },
    { id: 2, ad: "Üst Giyim" },
    { id: 3, ad: "Alt Giyim" },
    
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  

  return (
    <div className="App">
      <Header cart={cart} removeFromCart={removeFromCart} />
      <div className='row'>
        <Category kategoriler={kategoriler}/>
        <Urunler urunler={cardItems} addToCart={addToCart} /> {/* cardItems dizisini Urunler bileşenine iletiyoruz */}
      </div>

    </div>
  );
}

export default App;
