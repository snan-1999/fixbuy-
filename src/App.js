import './App.css';
import "./form/form/Fontawesome";
import Login from './form/form/Login';
// import Register from './form/form/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './form/form/About';
import Home from './form/form/Home';
import Products from './form/form/Products';
import "./index.css";
import Contact from './form/form/Contact';
import FAQ from './form/form/FAQ';
import SinglePost from './form/form/SinglePage';
// import LoginSession from './form/form/LoginSession';
import Terms from './form/form/Terms';
import Privacy from './form/form/Privacy';
import Profile from './form/form/Profile';
import Sell from './form/form/Sell';
import Fridge from './form/form/Fridge';

function App() {
  return (
    <>
      <Router>
      {/* <Login /> */}
        <Routes>

          <Route exact path='/' element={<Login />} />
          {/* <Route exact path='/signup' element={<Register />} /> */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/automobile/:name' element={<Login />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/product' element={<Products/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/faq' element={<FAQ/>} />
          <Route exact path='/singlePage' element={<SinglePost />} />
          {/* <Route exact path='/loginseesion' element={<LoginSession/>} /> */}
          <Route exact path='/terms' element={<Terms/>} />
          <Route exact path='/privacy' element={<Privacy/>} />
          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/sell' element={<Sell/>} />
          <Route exact path='/fridge' element={<Fridge/>} />
        
          {/* <Route exact path='/' element={</>/> */}
        </Routes>
      </Router>
    </>
    // <Register />
  );
}

export default App;

