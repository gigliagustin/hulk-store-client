import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Layout/navigationBar/Navigationbar' 
import Store from './components/Store'
import Footer from './components/Layout/Footer'


function App() {
  return (
    <div className="App">
        <Navigationbar />
        <Store />

        <Footer />
    </div>
  );
}

export default App;
