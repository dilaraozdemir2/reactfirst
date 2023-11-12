
import './App.css';
import Header from './Header';
import Category from './Category';
import Urunler from './Urunler';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Category />
        <Urunler /> 
      </div>

    </div>
  );
}

export default App;
