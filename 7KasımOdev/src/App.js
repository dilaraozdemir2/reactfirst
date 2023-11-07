import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <!-- Image and text --> */}
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="https://i.pinimg.com/1200x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg  " width="30" height="30" class="d-inline-block align-top" alt="" />
          FLYING EAGLE
        </a>
        <a href="#" class="badge badge-dark" className="link">Anasayfa</a>
        <a href="#" class="badge badge-dark" className="link">Galeri</a>
        <a href="#" class="badge badge-dark" className="link">İçindekiler</a>
        <a href="#" class="badge badge-dark" className="link">Hakkında</a>
      </nav>
      <div class="row">
        <div class="col-4">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">KATEGORİLER</a>

            <a href="#" class="list-group-item list-group-item-action list-group-item-primary">YENİ</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">DIŞ GİYİM</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-success">ÜST GİYİM</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-danger">ALT GİYİM</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-warning">KOLEKSİYONLAR</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-info">AKSESUAR</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light">ÇANTA</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">OUTLET</a>
          </div>
        </div>
        <div class="col-8">
          <div className="container">
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-31905-37-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-45201-79-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-40343-68-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-33985-65-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-45137-78-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-31905-37-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-31889-53-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-31905-37-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-42253-79-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-45185-78-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-31905-37-B.webp' alt='ürün' /></div>
            <div className='grid-item'><img src='https://cache.manuka.com.tr/product/cache/747x1121_-31905-37-B.webp' alt='ürün' /></div>
           </div>
        </div>
      </div>


    </div>
  );
}

export default App;
