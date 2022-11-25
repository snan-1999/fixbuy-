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
import SingleProductPage from './form/form/SingleProductPage';
// import LoginSession from './form/form/LoginSession';
import Terms from './form/form/Terms';
import Privacy from './form/form/Privacy';
import Profile from './form/form/Profile';
import Sell from './form/form/Sell';
import Fridge from './Forms/Electronics/Fridge';
import PC from './Forms/Laptop&Mobile/PC';
import HomeDecoration from './Forms/Furniture/Home-Decoration';
import Fashion from './Forms/Fashion & Clothes/Fashion';
import Bike from './Forms/Automobile/Bike_Scooty';
import ForRent from './Forms/Properties/For_Rent';
import Books from './Forms/Books_Sports/Books';
import Service from './Forms/Services/Service';
import PostedItems from './form/form/PostedItems';
import Shop from './form/form/Shop';
import Blogs from './form/form/Blog/Blogs';
import Packages from './form/form/Packages';
import SingleBlog from './form/form/Blog/SingleBlog';
import SearchPage from './form/form/SearchPage';
import SubProduct from './Forms/SubcategoryProduct/SubProduct';
import SavedItems from './form/form/SavedItems';
import Demo from './form/form/ImageUpload';
import SellerProfile from './form/form/SellerProfile';
import MainProducts from './Forms/SubcategoryProduct/MainProducts';
import SellCategory from './form/form/SellCategory';
// import Check from './form/form/Check';
// import AutomobileForm from './Forms/Automobile/AutomobileForm';
// import AutomobileForm from './Forms/Automobile/AutomobileForm'

function App() {
  return (
    <>
      <Router>
        {/* <Login /> */}
        <Routes>

          {/* <Route exact path='/' element={<Login />} /> */}
          {/* <Route exact path='/signup' element={<Register />} /> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/automobile/:name' element={<Login />} /> */}
          <Route path='/about' element={<About />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/search-home-result' element={<SearchPage />} />
          <Route path='/product' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/singleproductpage/:id' element={<SingleProductPage />} />
          <Route path='/posteditems' element={<PostedItems />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:SingleBlog/:id' element={<SingleBlog />} />
          <Route path='/:maincategory/:subcategory' element={<SubProduct />} />
          <Route path='/:maincategory/:subcategory/all-product' element={<MainProducts />} />
          {/* <Route  path='/singlePage' element={<SinglePost />} /> */}
          {/* <Route  path='/loginseesion' element={<LoginSession/>} /> */}
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/sellerProfile' element={<SellerProfile />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/saved-items' element={<SavedItems />} />
          <Route path='/sell/Electronics/:category' element={<Fridge />} />
          <Route path='/sell/PC/:category2' element={<PC />} />
          <Route path='/sell/Furniture/:category2' element={<HomeDecoration />} />
          <Route path='/sell/Fashion/:category2' element={<Fashion />} />
          <Route path='/sell/Automobile/:category2' element={<Bike />} />
          <Route path='/sell/Properties/:category2' element={<ForRent />} />
          <Route path='/sell/Books/:category2' element={<Books />} />
          <Route exact path='/sell/services/:category2' element={<Service />} />
          <Route path='/shop' element={<Shop />} />
          {/* mobile */}
          <Route path='/sell/automobile/SellCategory' element={<SellCategory />} />
          <Route path='/packages/:id/:categories/:sellertype' element={<Packages />} />

          {/* <Route exact path='/' element={</>/> */}
        </Routes>
      </Router>
    </>
    // <Register />
  );
}

export default App;

