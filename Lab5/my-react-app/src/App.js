import logo from './logo.svg';
import './App.css';
import HelloWorld from './sites/HelloWorld';
import Product from './sites/Product';
import Home from './sites/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/helloworld">Hello World</Link>
        <Link className="nav-link" to="/product">Product</Link>
      </div>
      <Routes>
        <Route path="/helloworld" element={<HelloWorld />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
