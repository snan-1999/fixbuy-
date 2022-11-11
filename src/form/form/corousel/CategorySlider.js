import React from 'react'
import  Carousel  from 'react-elastic-carousel';
import  Item  from './Item';
import car from '../../../assets/images/car.png';
import books from '../../../assets/images/books.png';
import furniture from '../../../assets/images/furniture.png';
import properties from '../../../assets/images/properties.png';
import fridge from '../../../assets/images/fridge.png';
import laptop from '../../../assets/images/laptop.png';
import fashion from '../../../assets/images/fashion.png';

 const CategorySlider = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
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

         <Carousel breakPoints={breakPoints} slide={1} loop={true} 
         pagination={{
          dynamicBullets: true,
          className:"paginationClass"
         }}>
            <Item className='category-slide'>
              <img src={car} className='sliderClass' />
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>AUTOMOBILE</p>
            </Item>
            <Item className='category-slide' >
            <img src={books} className='sliderClass'/>
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>BOOKS & <br/>SPORTS</p>
            </Item>
            <Item className='category-slide'>
            <img src={laptop} className='sliderClass'/>
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>PC, LAPTOP &<br/> MOBILES</p>
            </Item>
            <Item className='category-slide'>
            <img src={furniture} className='sliderClass'/>
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>FURNITURE</p>
            </Item>
            <Item className='category-slide'>
            <img src={properties} className='sliderClass'/>
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>PROPERTIES</p>
            </Item>
            <Item className='category-slide'>
            <img src={fridge} className='sliderClass'/>
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>ELECTRONICS & APPLIANCES</p>
            </Item>
            <Item className='category-slide'>
            <img src={fashion} className='sliderClass'/>
            <p style={{color:"#5A5A5A" , fontSize:"12px"}}>FASHION & <br/>CLOTHES</p>
            </Item>
        </Carousel>
      
     </div>
  )
}

export default CategorySlider
