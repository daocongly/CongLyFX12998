import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
// import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm bg-light">
          <div class="container-fluid bg-primary">
            <h2 class="nav-item ">
            <a class="nav-link text-white" href="/">Ristorante Con Fusion</a>
            </h2>
          </div>
      </nav>
        <Menu />
    </div>
  );
}

export default App;
