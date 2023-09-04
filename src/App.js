import './css/master.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/Products.List';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import ProductDetails from './components/Products.Details';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route

        path='/' element={
          <>
      <Slider />
      <ProductsList />
          </>
        }
         />

         <Route path='about' element={<About />} />

         {/* <Route path='/product/:productId' element={<ProductDetails />} /> */}

         <Route path='product/:productId' element={<ProductDetails />} />



      </Routes>

    </div>
  );
}

export default App;
