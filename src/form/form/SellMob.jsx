import React, { useEffect } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import BottomTop from "../../functions/BottomTop";
import { FaIndustry } from "react-icons/fa";
import { BiBattery } from "react-icons/bi";

const SellMob = () => {
    useEffect(() => {
        BottomTop()
    }, [0])

    const Automobile = [
        {
            name: 'Bike',
            to: '/sell/automobile/bikes'
        },
        {
            name: 'Car',
            to: '/sell/automobile/car'
        },
        {
            name: 'Heavy vehicle',
            to: '/sell/automobile/heavy_vehicle'
        },
        {
            name: 'Spare Parts',
            to: '/sell/automobile/spare_parts'
        },
        {
            name: 'Other',
            to: '/sell/automobile/other_items'
        }
    ]

    const Electronics = [
        {
            name: 'Fridge',
            to: "/sell/electronics/fridge"
        },
        {
            name: 'Fan',
            to: "/sell/electronics/fan"
        },
        {
            name: 'Cooler',
            to: "/sell/electronics/cooler"
        },
        {
            name: 'A/C',
            to: "/sell/electronics/ac"
        },
        {
            name: 'Television & Led',
            to: "/sell/electronics/television_&_led"
        },
        {
            name: 'Washing Machine',
            to: "/sell/electronics/washing_machine"
        },
        {
            name: 'Hard Disks, Printer & Monitor',
            to: "/sell/electronics/hard_disks_printer"
        },
        {
            name: 'Games',
            to: "/sell/electronics/games"
        },
        {
            name: 'Speakers',
            to: "/sell/electronics/speakers"
        },
        {
            name: 'Camera & Lens',
            to: "/sell/electronics/camera_&_lens"
        },
        {
            name: 'Kitchen & Others',
            to: "/sell/electronics/kitchen_&_others"
        },
        {
            name: 'Computer Accessories',
            to: "/sell/electronics/computer_accessories"
        },
        {
            name: 'Air Purifier',
            to: "/sell/electronics/air_purifier"
        },
        {
            name: 'Water Purifier',
            to: "/sell/electronics/water_purifier"
        },
        {
            name: 'Other Items',
            to: "/sell/electronics/other_items"
        },
    ]

    const Furniture = [
        {
            name: 'Home Decoration',
            to: '/sell/furniture/home_decoration'
        },
        {
            name: 'Sofa & Beds',
            to: "/sell/furniture/sofa_&_beds"
        },
        {
            name: 'Chairs & Tables',
            to: "/sell/furniture/chairs_&_tables"
        },
        {
            name: 'Kids Furniture',
            to: "/sell/furniture/kids_furniture"
        },
        {
            name: 'Others',
            to: "/sell/furniture/other_items"
        },
    ]

    const Laptop = [
        {
            name: 'Mobile & Phones',
            to: '/sell/pc/mobile_phones'
        },
        {
            name: 'Tablets',
            to: '/sell/pc/tablets'
        },
        {
            name: 'Laptops',
            to: '/sell/pc/laptops'
        },
        {
            name: 'Computers',
            to: '/sell/pc/computers'
        },
        {
            name: 'Accessories',
            to: '/sell/pc/accessories'
        },
    ]

    const Fashion = [
        {
            name: 'Men',
            to: '/sell/fashion/men'
        },
        {
            name: 'Women',
            to: '/sell/fashion/women'
        },
        {
            name: 'Kids',
            to: '/sell/fashion/kids'
        },
        {
            name: 'Fashion & Beauty',
            to: '/sell/fashion/fashion_&_beauty'
        },
        {
            name: 'Others',
            to: '/sell/fashion/other_items'
        },
    ]

    const services = [
        {
            name: 'Education Classes',
            to: '/sell/services/educations_&_classes'
        },
        {
            name: 'Electronics Computers',
            to: '/sell/services/electronics_&_computers'
        },
        {
            name: 'Accountancy Services',
            to: '/sell/services/accountancy_services'
        },
        {
            name: 'Software Services',
            to: '/sell/sevices/software_services'
        },
        {
            name: 'Other Services',
            to: '/sell/services/others_services'
        },
    ]

    const books_sports = [
        {
            name: 'Books',
            to: '/sell/Books/books'
        },
        {
            name: 'Books',
            to: '/sell/Books/gym'
        },
        {
            name: 'Musical Instruments',
            to: '/sell/Books/musical_instruments'
        },
        {
            name: 'Sports Items',
            to: '/sell/Books/sports_items'
        },
        {
            name: 'Others',
            to: '/sell/Books/other_items'
        },
    ]

    const Properties = [
        {
            name: 'For Rent',
            to: '/sell/properties/for_rent'
        },
        {
            name: 'For Sale',
            to: '/sell/properties/for_sales'
        },
        {
            name: 'Land & Plots',
            to: '/sell/properties/land_&_plots'
        },
    ]

    return (
        <>
            <div class="container">
                <div class="row row-cols-2 ">
                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Automobile}><div class="col border text-center py-5"><FontAwesomeIcon icon="fa-car" className="sell-icon-res"></FontAwesomeIcon>&nbsp; &nbsp; Automobile</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Electronics}><div class="col border text-center py-5"><FontAwesomeIcon icon="fa-tv" className="sell-icon-res"></FontAwesomeIcon>&nbsp; &nbsp; Electronics</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Furniture}><div class="col border text-center py-5"><GiSofa className="sell-icon-res fs-5" />&nbsp; &nbsp; Furniture</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Fashion}><div class="col border text-center py-5"><FontAwesomeIcon icon="fa-shirt" className="sell-icon-res"></FontAwesomeIcon>&nbsp; &nbsp; Fashion</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={services}><div class="col border text-center py-5"><FontAwesomeIcon icon="fa-bell-concierge" className="sell-icon-res"></FontAwesomeIcon>&nbsp; &nbsp; Services</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Properties}><div class="col border text-center py-5"><MdOutlineRealEstateAgent className="sell-icon-res fs-5" />&nbsp; &nbsp; Properties</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={books_sports}><div class="col border text-center py-5"><FontAwesomeIcon icon="fa-medal" className="sell-icon-res"></FontAwesomeIcon>&nbsp; &nbsp; Books</div></Link>

                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Laptop}><div class="col border text-center py-5"><FontAwesomeIcon icon="fa-laptop" className="sell-icon-res"></FontAwesomeIcon>&nbsp; &nbsp; Laptop</div></Link>
                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Laptop}><div class="col border text-center py-5"><FaIndustry className="sell-icon-res" />&nbsp; &nbsp; Industrial Goods</div></Link>
                    <Link to='/sell/automobile/SellCategory' style={{ textDecoration: 'none', color: 'black', padding: '0' }} state={Laptop}><div class="col border text-center py-5"><BiBattery  className="sell-icon-res  fs-5" />&nbsp; &nbsp; EV Batteries</div></Link>

                </div>
            </div>
        </>

    )
}

export default SellMob;