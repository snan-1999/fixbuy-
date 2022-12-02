import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import car from '../../../assets/images/car.png';
import books from '../../../assets/images/books.png';
import furniture from '../../../assets/images/furniture.png';
import properties from '../../../assets/images/properties.png';
import fridge from '../../../assets/images/fridge.png';
import laptop from '../../../assets/images/laptop.png';
import fashion from '../../../assets/images/fashion.png';
import services1 from '../../../assets/images/services1.png';
import AllCategoryModal from '../Modals/AllCategoryModal';
import { Link } from 'react-router-dom';

const CategorySlider = () => {
  const Automobile = [
    {
      name : "All",
      to: "/automobile/all/all-product"
    },
    {
      name: 'Bike',
      to: "/automobile/bikes"
    },
    {
      name: 'Car',
      to: "/automobile/car"
    },
    {
      name : 'Scooty',
      to: "/automobile/scooty"
    },
    {
      name: 'Heavy vehicle',
      to: "/automobile/heavy vehicle"
    },
    {
      name: 'Spare Parts',
      to: "/automobile/spare parts"
    },
    {
      name: 'Other',
      to: "/automobile/other items"
    }
  ]

  const Electronics = [
    {
      name: 'All',
      to: "/electronics/all/all-product"
    },
    {
      name: 'Fridge',
      to: "/electronics/fridge"
    },
    {
      name: 'Cooler',
      to: "/electronics/cooler"
    },
    {
      name: 'Fan',
      to: "/electronics/fan"
    },
    {
      name: 'A/C',
      to: "/electronics/ac"
    },
    {
      name: 'Television & Led',
      to: "/electronics/television & led"
    },
    {
      name: 'Washing Machine',
      to: "/electronics/washing machine"
    },
    {
      name: 'Hard Disks, Printer & Monitor',
      to: "/electronics/hard disks printer"
    },
    {
      name: 'Games',
      to: "/electronics/games"
    },
    {
      name: 'Speakers',
      to: "/electronics/speakers"
    },
    {
      name: 'Camera & Lens',
      to: "/electronics/camera & lens"
    },
    {
      name: 'Kitchen & Others',
      to: "/electronics/kitchen & others"
    },
    {
      name: 'Computer Accessories',
      to: "/electronics/computer accessories"
    },
    {
      name: 'Air Purifier',
      to: "/electronics/air purifier"
    },
    {
      name: 'Water Purifier',
      to: "/electronics/water purifier"
    },
    {
      name: 'Other Items',
      to: "/electronics/other items"
    },
  ]

  const Furniture = [
    {
       name: "All",
       to: "/furnitures/all/all-product"
    },
    {
      name: "Home Decoration",
      to: "/furnitures/home decoration"
    },
    {
      name: 'Sofa & Beds',
      to: "/furniture/sofa & beds"
    },
    {
      name: 'Chairs & Tables',
      to: "/furniture/chairs & tables"
    },
    {
      name: 'Kids Furniture',
      to: "/furniture/kids furniture"
    },
    {
      name: 'Others',
      to: "/furniture/other items"
    },
  ]

  const Laptop = [
    {
      name: 'All',
      to: "/mobiles/all/all-product"
    },
    {
      name: 'Mobile & Phones',
      to: '/mobile/mobile phones'
    },
    {
      name: 'Tablets',
      to: '/mobile/tablets'
    },
    {
      name: 'Laptops',
      to: '/mobile/laptops'
    },
    {
      name: 'Computers',
      to: '/mobile/computers'
    },
    {
      name: 'Accessories',
      to: '/mobile/accessories'
    },
  ]

  const Fashion = [
    {
      name: "All",
      to: "/Fashions/all/all-product"
    },
    {
      name: 'Men',
      to: '/Fashion/men'
    },
    {
      name: 'Women',
      to: '/Fashion/women'
    },
    {
      name: 'Kids',
      to: '/Fashion/kids'
    },
    {
      name: 'Fashion & Beauty',
      to: '/Fashion/fashion & beauty'
    },
    {
      name: 'Others',
      to: '/Fashion/other items'
    },
  ]

  const services = [
    {
      name: "All",
      to: "/Services/all/all-product"
    },
    {
      name: 'Education Classes',
      to: '/Services/educations & classes'
    },
    {
      name: 'Electronics Computers',
      to: '/Services/electronics & computers'
    },
    {
      name: 'Accountancy Services',
      to: '/Services/accountancy services'
    },
    {
      name: 'Software Services',
      to: '/Sevices/software services'
    },
    {
      name: 'Other Services',
      to: '/Services/others services'
    },
  ]

  const books_sports = [
    {
      name: 'All',
      to: "/booksAndSports/all/all-product"
    },
    {
      name: 'Books',
      to: '/booksAndSports/books'
    },
    {
      name: 'Gym',
      to: '/booksAndSports/gym'
    },
    {
      name: 'Musical Instruments',
      to: '/booksAndSports/musical instruments'
    },
    {
      name: 'Sports Items',
      to: '/booksAndSports/sports items'
    },
    {
      name: 'Others',
      to: '/booksAndSports/other items'
    },
  ]

  const Properties = [
    {
      name: 'All',
      to: "/properties/all/all-product"
    },
    {
      name: 'For Rent',
      to: '/properties/for rent'
    },
    {
      name: 'For Sale',
      to: '/properties/for sales'
    },
    {
      name: 'Land & Plots',
      to: '/properties/land & plots'
    },
  ]

  const [isOpen, setisOpen] = useState(false)
  const [subcategory, setSubCategory] = useState([]);
  const Onclose = () => setisOpen(false)
  const OnOpen = () => setisOpen(true)

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <div className='container justify-content-center'>
      <div className='d-flex' >
        <div className='headingCategory text-align-left '>
          Look Through Categories
        </div>
      </div>
 
      <Carousel breakPoints={breakPoints} slide={1} loop={true} showArrows={false} enableAutoPlay pagination={false}
        // pagination={{
        //   dynamicBullets: false,
        //   className: "paginationClass"
        // }}
        >
        
        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(Automobile) }}>
          <img src={car} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>AUTOMOBILE</p>
        </Item>
        
        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(books_sports) }} >
          <img src={books} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>BOOKS & <br />SPORTS</p>
        </Item>

        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(Laptop) }}>
          <img src={laptop} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>PC, LAPTOP &<br /> MOBILES</p>
        </Item>

        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(Furniture)  }}>
          <img src={furniture} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>FURNITURE</p>
        </Item>

        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(Properties) }}>
          <img src={properties} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>PROPERTIES</p>
        </Item>

        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(Electronics) }}>
          <img src={fridge} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>ELECTRONICS & APPLIANCES</p>
        </Item>

        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(Fashion) }}>
          <img src={fashion} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>FASHION & <br />CLOTHES</p>
        </Item>
        
        <Item className='category-slide' onClick={() => { setisOpen(true); setSubCategory(services) }}>
          <img src={services1} className='sliderClass' />
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>SERVICES</p>
        </Item>
      </Carousel>

      {
        isOpen &&
        <AllCategoryModal Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} categories={subcategory}  />
      }

    </div>
  )
}

export default CategorySlider
