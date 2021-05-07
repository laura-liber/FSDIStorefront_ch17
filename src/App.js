import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import TodoApp from './components/todo';
import HomePage from './components/homePage';
import About from './components/about';
import Cart from './components/cart';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/todo" exact component={TodoApp}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
