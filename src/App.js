import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navigationbar from './components/Layout/navigationBar/Navigationbar' ;
import IndexAdm from './components/adm/IndexAdm';
import Store from './components/Store';
import Cart from './components/cart/Cart';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Navigationbar />
        </Route>
        <Switch>
          <Route path="/store">
            <Store />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/Admin">
            <IndexAdm />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
