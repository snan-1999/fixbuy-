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
import MainChatFile from './ChatSeller/MainChatFile';
import PakagesShowMenu from './form/form/PakagesShowMenu';
import MessageScreen from './ChatSeller/MessageScreen';
import useGeoLocation from './hooks/useGeoLoaction';
import RazorpayAppPayment from './form/form/RazorpayAppPayment';
import EvBattery from './Forms/EV/EvBattery';
import { useContext, useEffect, useState } from 'react';
import { GlobalVariables } from './Context/StateProvider';
import { HomeAllData, SearchHome } from './functions/HomeFun';
import { FilterShopData, ShopProductData } from './functions/ShopFun';
import { ProfileStore } from './store';
import { baseUrl } from './functions/constant';
import axios from 'axios'
import { AllDataCategory, FilterMainCategoryData, FilterSubCategoryData, SubDataCategoryFun } from './functions/MainCategoryFun';
// <Route path='/razorpay/:name/:contact/:product_id/:user_id/:price/:days/:type' element={<RazorpayAppPayment/>} />
// import Check from './form/form/Check';
// import AutomobileForm from './Forms/Automobile/AutomobileForm';
// import AutomobileForm from './Forms/Automobile/AutomobileForm'

function App() {
  // globals
  const { latitude, Longitude, setHomeData, UserId, SearchSend, setSearchSend, EnterSearch, setEnterSearch } = useContext(GlobalVariables);
  const SearchKey = ProfileStore(state => state.StoreSearch)
  console.log(SearchKey, 'SearchKey')
  console.log('latitudes1')
  const SearchDataold = ProfileStore(state => state.SearchData)
  // end globals



  const [TotalPagess, setTotalPagess] = useState('');
  const [PageNo, setPageNo] = useState(1);
  const [Loading, setLoading] = useState(false)
  const [automobiles, setAutomobiles] = useState([]);
  const location = useGeoLocation();
  const LoadMOres = () => {
    setPageNo(PageNo + 1)
    setLoading(true)
    setHeight(height + 1600)

  }
  const homeDataAll = async () => {
    // console.log(UserId, 'UserId')
    const { data } = await HomeAllData(Longitude, latitude, PageNo, UserId)

    if (data.status) {
      setLoading(false)
      setAutomobiles([...automobiles, ...data.data]);
      setHomeData(data.data)
      setTotalPagess(data.totalPages);
    }
  }

  const [height, setHeight] = useState(2000)

  useEffect(() => {
    homeDataAll()
  }, [0, PageNo, latitude, UserId])


  // shop Page Api
  const [AllShopData, setAllShopData] = useState([])
  const [ShopTotalPagess, setShopTotalPagess] = useState('')
  const [ShopPage, setShopPage] = useState(1)
  // initial
  console.log(latitude, 'lat')
  const ShopData = async () => {
    try {
      const { data } = await ShopProductData(latitude, Longitude, ShopPage, UserId)
      console.log(data, 'shopDataApp')
      // console.log(UserId, 'shopData')
      if (data.status) {
        setLoading(false)
        setShopTotalPagess(data.totalPages);
        setAllShopData(data.data)
      }
    } catch (error) {

    }
  }

  // Load More
  const ShopDataLoadMore = async () => {
    try {
      const { data } = await ShopProductData(latitude, Longitude, ShopPage, UserId)
      console.log(data, 'shopData')
      console.log(UserId, 'shopData')
      if (data.status) {
        setLoading(false)
        setShopTotalPagess(data.totalPages);
        setAllShopData([...AllShopData, ...data.data])
      }
    } catch (error) {

    }
  }
  // Simple Load Filter
  const [filters, setfilters] = useState(null)
  const [FIlterPageNO, setFIlterPageNO] = useState(1); // filter Page No 
  const ShopDataFIlter = async () => {
    setFIlterPageNO(1)
    setAllShopData([])
    console.log(filters, 'filter')
    try {
      const { data } = await FilterShopData(latitude, Longitude, FIlterPageNO, filters, UserId)
      console.log(data, 'shopData initial')
      setLoading(false)
      setAllShopData(data.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    ShopDataFIlter()
  }, [filters])
  //  Load mOre Filter
  const ShopDataFIlterLoadMore = async () => {
    console.log(filters, 'filter')
    try {
      const { data } = await FilterShopData(latitude, Longitude, FIlterPageNO, filters, UserId)
      console.log(data, 'shopData')
      setLoading(false)
      setAllShopData([...AllShopData, ...data.data])
    } catch (error) {

    }
  }
  const LoadMOreFIlters = () => {
    setFIlterPageNO(FIlterPageNO + 1)
    console.log(FIlterPageNO, "HomeData")
    setLoading(true)
  }
  useEffect(() => {
    ShopDataFIlterLoadMore()
  }, [FIlterPageNO])
  const LoadMOreShop = () => {
    setShopPage(ShopPage + 1)
    console.log(ShopTotalPagess, ShopPage, "HomeData")
    setLoading(true)
  }
  useEffect(() => {
    ShopData()
  }, [latitude])
  useEffect(() => {
    ShopDataLoadMore()
  }, [ShopPage])

  // Serach Page

  // initial Data 
  const [searchWord, setsearchWord] = useState(null)
  const [TotalPagesSearch, setTotalPagesSearch] = useState('');
  const [AllDataSearch, setAllDataSearch] = useState([])
  const [NoDataSearch, setNoDataSearch] = useState(false)
  const [SearchPAgeNo, setSearchPAgeNo] = useState(1)

  const OneTImeDataSearch = async () => {
    setSearchPAgeNo(1)
    setAllDataSearch([])
    setLoading(true)
    const { data } = await SearchHome(Longitude, latitude, SearchKey, SearchPAgeNo)
    setLoading(false)
    if (data.status) {
      setTotalPagesSearch(data.totalPages);
      ProfileStore.setState({ SearchData: data.data })
      setAllDataSearch(data.data);
      // console.log(data, 'SearchKey')
    } else {
      setNoDataSearch(true)
    }
  }

  // LoadMore 
  const LoadDataFun = async () => {
    const { data } = await SearchHome(Longitude, latitude, SearchKey, SearchPAgeNo)
    console.log(data, 'SearchKeyload')
    setLoading(true, 'dataSearch')
    if (data.status) {
      setLoading(false)
      setTotalPagesSearch(data.totalPages);
      const PreData = SearchDataold;
      console.log('call load data')
      // ProfileStore.setState((state) => {
      //   console.log(state, 'store state')
      //   let temp = state;
      //   console.log(temp.SearchData.length, 'data length');
      //   temp.SearchData = [...state.SearchData, ...data.data];
      //   console.log(temp, 'updated state');
      //   return state;
      // })
      setAllDataSearch([...AllDataSearch, ...data.data]);
      console.log(AllDataSearch, 'hello1')
    }
  }
  const LoadMOreSearch = () => {
    setSearchPAgeNo(SearchPAgeNo + 1)
    setLoading(true)
  }
  useEffect(() => {
    setsearchWord(SearchKey)
    OneTImeDataSearch()
    console.log(searchWord, 'searchWord')
    console.log(SearchSend, 'SearchSend')
  }, [EnterSearch, SearchKey])
  useEffect(() => {
    if (searchWord == SearchKey) {
      LoadDataFun()
      console.log(true, 'dataSearch')
    } else {

      console.log(false, 'dataSearch')
    }
  }, [SearchPAgeNo])


  //  MAin Categories
  const [MainCategoryPageNO, setMainCategoryPageNO] = useState(1);
  const GetMainCatogery = ProfileStore(state => state.MainCategoryName)
  const maincategory = ProfileStore(state => state.MainCategoryParam)
  const [NODataMainCategory, setNODataMainCategory] = useState(false)
  const [categoryNameChange, setcategoryNameChange] = useState('')
  const [Diffrence, setDiffrence] = useState(null)
  const [AllDataMainCategory, setAllDataMainCategory] = useState([]);
  const [TotalPagesMainCategory, setTotalPagesMainCategory] = useState(2);
  const [FIlterPageNOMainCategory, setFIlterPageNOMainCategory] = useState(1); // filter Page No 
  const MainDataCategory = async () => {

    setDiffrence(maincategory)
    // ProfileStore.setState({ StoreSearch: 1 })
    // setAllData([])
    let api
    if (UserId == undefined || UserId == null) {
      api = `${baseUrl}/product/fetch/${GetMainCatogery}/${latitude}/${Longitude}/${MainCategoryPageNO}`
    } else {
      api = `${baseUrl}/product/fetch/${GetMainCatogery}/${latitude}/${Longitude}/${MainCategoryPageNO}?user_id=${UserId}`
    }
    const { data } = await axios.get(api)
    console.log(data, 'MainDataaa')
    console.log(api, 'MainDataaa')
    if (data.status) {
      setLoading(false)
      if (Diffrence == maincategory) {
        console.log(true, 'run')
        setAllDataMainCategory(data.data)
      } else {
        setAllDataMainCategory(data.data)
        console.log(false, 'run')
      }
      setNODataMainCategory(false)
    } else {
      setLoading(false)
      setNODataMainCategory(true)
    }

  }
  useEffect(() => {
    setMainCategoryPageNO(1)
    setcategoryNameChange(maincategory)
    console.log(categoryNameChange, 'jiii')
    // if (ParamLocate !== '/automobile/all/all-product') {
    //   setFIlterPageNOMainCategory(1)
    //   setMainCategoryPageNO(1)
    //   setAllDataMainCategory([])
    // }

    MainDataCategory()
  }, [0, maincategory, latitude])
  // load more maincategory simple
  const LoadMoreDataMain = async () => {
    const { data } = await AllDataCategory(GetMainCatogery, latitude, Longitude, MainCategoryPageNO, UserId)
    setTotalPagesMainCategory(data.totalPages)
    console.log(data.totalPages)
    console.log(data, 'main')
    setLoading(true)
    if (data.status) {
      setLoading(false)
      // if (data.totalPages > 1) {
      setAllDataMainCategory([...AllDataMainCategory, ...data.data])
      // setAllData(data.data)
      // alert('load') 
      //     console.log(AllData, 'che')
      // } else {
      //     setAllData(data.data)
      //     // alert('no dta')
      // }
      setNODataMainCategory(false)
      // setName(AllData[0].categories)


    } else {
      setLoading(false)
      setNODataMainCategory(true)
      setAllDataMainCategory([])

      // alert('There is no Data')
    }
  }
  const LoadMOreMainCategory = async () => {
    setMainCategoryPageNO(MainCategoryPageNO + 1)
    setLoading(true)

  }
  useEffect(() => {
    LoadMoreDataMain()
  }, [MainCategoryPageNO])

  // with simple filter 

  const [filtersMaincategory, setfiltersMaincategory] = useState(null)
  const MainCategoryDataFIlter = async () => {
    setFIlterPageNOMainCategory(1)
    setAllDataMainCategory([])
    console.log(FIlterPageNOMainCategory, 'filter')
    try {
      const { data } = await FilterMainCategoryData(GetMainCatogery, latitude, Longitude, FIlterPageNOMainCategory, filtersMaincategory, UserId)
      console.log(data, 'MainCategoryDataFIlter')
      // setFIlterPageNO(1)
      setLoading(false)

      setAllDataMainCategory(data.data)
      // if(Diffrence == maincategory) {
      //     console.log(true , 'run')
      // }else{
      //     setAllData(data.data)
      //     console.log(false ,'run')
      // }
    } catch (error) {

    }
  }
  useEffect(() => {
    MainCategoryDataFIlter()
  }, [filtersMaincategory])

  // filter Load More
  const MainCategoryDataFIlterLoad = async () => {
    // setAllData([])
    console.log(filters, 'filter')
    try {
      const { data } = await FilterMainCategoryData(GetMainCatogery, latitude, Longitude, FIlterPageNOMainCategory, filtersMaincategory, UserId)
      console.log(data, 'MainCategoryDataFIlterLoad')
      setLoading(false)
      setTotalPagesMainCategory(data.totalPages)
      setAllDataMainCategory([...AllDataMainCategory, ...data.data])
      // if(Diffrence == maincategory) {
      //     console.log(true , 'run')
      // }else{
      //     setAllData(data.data)
      //     console.log(false ,'run')
      // }
    } catch (error) {

    }
  }
  const LoadMOreFIlterMainCategory = async () => {
    setFIlterPageNOMainCategory(FIlterPageNOMainCategory + 1)
    setLoading(true)

  }
  useEffect(() => {
    MainCategoryDataFIlterLoad()
  }, [FIlterPageNOMainCategory]);


  //  SubCategoryData 
  const [SubCategoryPageNO, setSubCategoryPageNO] = useState(1);
  const GetSubCatogery = ProfileStore(state => state.SubCategoryName)
  const subcategory = ProfileStore(state => state.SubCategoryParam)
  const [NODataSubCategory, setNODataSubCategory] = useState(false)
  // const [categoryNameChange, setcategoryNameChange] = useState('')
  // const [Diffrence, setDiffrence] = useState(null)
  const [AllDataSubCategory, setAllDataSubCategory] = useState([]);
  const [TotalPagesSubCategory, setTotalPagesSubCategory] = useState(2);
  const [FIlterPageNOSubCategory, setFIlterPageNOSubCategory] = useState(1); // filter Page No 

  const SubDataCategory = async () => {
    console.log(maincategory, subcategory, 'subcategory')
    // setAllData([])
    let api;
    // try {
    if (UserId == undefined || UserId == null) {
      api = `${baseUrl}/product/fetch/${maincategory}/${subcategory}/${latitude}/${Longitude}/${SubCategoryPageNO}`
    } else {
      api = `${baseUrl}/product/fetch/${maincategory}/${subcategory}/${latitude}/${Longitude}/${SubCategoryPageNO}?user_id=${UserId}`
    }

    console.log(api, 'AppSub')
    const { data } = await axios.get(api);
    setLoading(true)
    console.log(data, 'AppSub')
    if (data.status) {
      setLoading(false)
      if (data.totalPages > 1) {
        setAllDataSubCategory(data.data)
        // alert('load') 
        // console.log(AllData, 'che')
      } else {
        setAllDataSubCategory(data.data)
        // alert('no dta')
      }
      setTotalPagess(data.totalPages)
      setNODataSubCategory(false)
      console.log(api, 'check')
      console.log(data, 'hy')
      // setName(AllData[0].categories)
      // console.log(Name, 'hy')

    } else {
      setLoading(false)
      setNODataSubCategory(true)
      setAllDataSubCategory([])

      // alert('There is no Data')
    }
    // } catch (error) {
    //     alert(error.message, 'hy')
    // }
  }
  useEffect(() => {
    setfiltersSubcategory('')
    setAllDataSubCategory([])
    setSubCategoryPageNO(1)
    // if (ParamLocate !== `/automobile/${GetSubCatogery}`) {
    //     setFIlterPageNO(1)
    //     setAllData([])
    //     setPageNO(1)
    // }
    // BottomTop()

    SubDataCategory()
    // console.log('run');
  }, [0, subcategory, latitude])

  // Load SubData

  const LoadSubData = async () => {
    try {
      setLoading(true)
      const { data } = await SubDataCategoryFun(maincategory, subcategory, latitude, Longitude, SubCategoryPageNO, UserId)
      console.log(data, 'load')
      if (data.status) {
        setTotalPagesSubCategory(data.totalPages)
        setLoading(false)
        // if (data.totalPages > 1) {
        setAllDataSubCategory([...AllDataSubCategory, ...data.data])
        // }
      }
    } catch (error) {
      // alert(error.message)
    }
  }
  const LoadMOreSub = () => {
    setSubCategoryPageNO(SubCategoryPageNO + 1)
    setLoading(true)
  }
  useEffect(() => {
    LoadSubData()
  }, [SubCategoryPageNO])

  // filter Data
  const [filtersSubcategory, setfiltersSubcategory] = useState(null)
  const SubCategoryDataFIlter = async () => {
    setFIlterPageNOSubCategory(1)
    setAllDataSubCategory([])

    try {
      const { data } = await FilterSubCategoryData(maincategory, subcategory, latitude, Longitude, FIlterPageNOSubCategory, filtersSubcategory)
      console.log(data, 'AppDataSUb')
      setAllDataSubCategory(data.data)
      setLoading(false)
      // if(Diffrence == maincategory) {
      //     console.log(true , 'run')
      // }else{
      //     setAllData(data.data)
      //     console.log(false ,'run')
      // }
    } catch (error) {

    }
  }
  const LoadMOreFIlterSub = async () => {
    setFIlterPageNOSubCategory(FIlterPageNOSubCategory + 1)
    setLoading(true)

  }
  useEffect(() => {
    // setPageNO(1)
    SubCategoryDataFIlter()
  }, [filtersSubcategory]);
  // filter Load More
  const SubCategoryDataFIlterLoad = async () => {
    // setAllData([])
   
    try {
      const { data } = await FilterSubCategoryData(maincategory, subcategory, latitude, Longitude, FIlterPageNOSubCategory, filtersSubcategory)
      console.log(data, 'shopData')
      setAllDataSubCategory([...AllDataSubCategory, ...data.data])
      setLoading(false)
      setTotalPagesSubCategory(data.totalPages)
      // if(Diffrence == maincategory) {
      //     console.log(true , 'run')
      // }else{
      //     setAllData(data.data)
      //     console.log(false ,'run')
      // }
    } catch (error) {

    }
  }
  useEffect(() => {
    SubCategoryDataFIlterLoad()
}, [FIlterPageNOSubCategory])
  return (
    <>
      {/* GeoLocation start */}
      <div className="inline-block mr-auto">
        {
          location.loaded &&
          JSON.stringify(location)

        }
      </div>
      {/* Geolocation end */}
      <Router>
        {/* <Login /> */}
        <Routes>

          {/* <Route exact path='/' element={<Login />} /> */}
          {/* <Route exact path='/signup' element={<Register />} /> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/automobile/:name' element={<Login />} /> */}
          <Route path='/about' element={<About />} />
          <Route exact path='/' element={<Home {...{ automobiles, LoadMOres, height, setHeight, Loading, setLoading, TotalPagess, setTotalPagess, PageNo, setPageNo }} />} />
          <Route path='/shop' element={<Shop  {...{ AllShopData, LoadMOreShop, ShopPage, filters, setfilters, FIlterPageNO, setFIlterPageNO, LoadMOreFIlters, Loading, setLoading, }} />} />
          <Route exact path='/search-home-result' element={<SearchPage  {...{ LoadMOreSearch, AllDataSearch, setAllDataSearch, Loading, setLoading, TotalPagesSearch, SearchPAgeNo ,NoDataSearch}} />} />
          <Route path='/:maincategory/:subcategory/all-product' element={<MainProducts {...{ AllDataMainCategory, LoadMOreMainCategory, MainCategoryPageNO, filtersMaincategory, setfiltersMaincategory, LoadMOreFIlterMainCategory, Loading, setLoading, FIlterPageNOMainCategory, setFIlterPageNOMainCategory, setMainCategoryPageNO, setAllDataMainCategory, TotalPagesMainCategory, NODataMainCategory }} />} />
          <Route path='/:maincategory/:subcategory' element={<SubProduct {...{ AllDataSubCategory, LoadMOreSub, SubCategoryPageNO, Loading, setLoading, setfiltersSubcategory, filtersSubcategory, LoadMOreFIlterSub ,TotalPagesSubCategory ,Loading, setLoading, FIlterPageNOSubCategory}} />} />
          <Route path='/product' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/singleproductpage/:id' element={<SingleProductPage />} />
          <Route path='/posteditems' element={<PostedItems />} /> 
          <Route path='/packages' element={<Packages />} />
          <Route path='/packages/view' element={<PakagesShowMenu />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:SingleBlog/:id' element={<SingleBlog />} />
          {/* <Route  path='/singlePage' element={<SinglePost />} /> */}
          {/* <Route  path='/loginseesion' element={<LoginSession/>} /> */}
          <Route path='/razorpay/:name/:contact/:product_id/:user_id/:price/:days/:type' element={<RazorpayAppPayment />} />
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
          <Route path='/sell/services/:category2' element={<Service />} />
          <Route path='/sell/industrial/:category2' element={<EvBattery />} />
          <Route path='/sell/ev-battery/:category2' element={<EvBattery />} />
          {/* mobile */}
          <Route path='/sell/automobile/SellCategory' element={<SellCategory />} />
          <Route path='/packages/:id/:categories/:sellertype' element={<Packages />} />
          <Route path='/mainchatfile' element={<MainChatFile />} />
          <Route path='/messagescreen' element={<MessageScreen />} />


          {/* <Route exact path='/' element={</>/> */}
        </Routes>
      </Router>
    </>
    // <Register />
  );
}

export default App;

