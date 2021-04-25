import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from './components/navBar';
import Footer from './components/footer';
import Product from './components/product';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Our Amazing Catalog</h1>

      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>

      <Footer></Footer>
    </div>
  );
}

export default App;
