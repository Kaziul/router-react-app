import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/post/:id" element={<PostDetail />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route exact path="/" element={< />}></Route>
          <Route exact path="/product/:productKey" element={<ProductDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
