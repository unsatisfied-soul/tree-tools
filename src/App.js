import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Catalogmain from './Components/Pages/Catalog/CatalogMain/Catalogmain';
import CatalogProduct from './Components/Pages/Catalog/CatalogProduct/CatalogProduct';
import Footer from './Components/Pages/Footer/Footer';
import Header from './Components/Pages/Home/Header/Header';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/RegistartionForm/Login';
import Registration from './Components/Pages/RegistartionForm/Registartion';
import Products from './Components/Products/Products';
import Protect from './Components/ProtectRoute/Protect';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Products>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Protect path="/catalog">
             <Catalogmain></Catalogmain>
          </Protect>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route>
            <Registration></Registration>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </Products>
     </AuthProvider>
    </div>
  );
}

export default App;
