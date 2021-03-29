import React from 'react'
import { LocationOn,Call,QueryBuilder,Add,AccountCircle,CompareArrows,Menu } from '@material-ui/icons';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Logo from '../components/Logo';
import SocialLinks from '../components/SocialLinks';

export default function Header() {
    return (
        <>
        <header className="header-area header-dark d-none d-lg-block">
            <div className="header-main">
                <div className="container">
                <div className="header-main-wrapper d-flex justify-content-between align-items-center">
                    <Logo/>
                    <div className="header-main-content d-flex">
                    <div className="single-content-block d-flex">
                        <div className="block-icon">
                            <LocationOn/>
                        </div>
                        <div className="block-content media-body">
                        <span className="text">192 Orchard st, Ohio,<br />Ca, 90002, USA</span>
                        </div>
                    </div>
                    <div className="single-content-block d-flex">
                        <div className="block-icon">
                            <Call/>
                        </div>
                        <div className="block-content media-body">
                        <span className="label">Hotline</span>
                        <span className="text-2"><a href="tel:05683458868">056 83 458 868</a></span>
                        </div>
                    </div>
                    <div className="single-content-block d-flex">
                        <div className="block-icon">
                        <QueryBuilder/>
                        </div>
                        <div className="block-content media-body">
                        <span className="label">Working Hours</span>
                        <span className="text">Mon-Fri: 8.00 - 17.00</span>
                        </div>
                    </div>
                    </div>
                    <div className="header-main-btn">
                    <Link to='add-car' className="main-btn"><Add/> Add Car </Link>
                    </div>
                </div>
                </div>
            </div>        
            </header>
            <div className="header-menu header-menu-dark d-none d-lg-block">
    <div className="container">
      <div className="header-menu-inner d-flex align-items-center justify-content-between">
        <nav className="site-navigation">
          <ul className="main-menu">
            <li>
              <a className="active" href="#">Home </a>
              <ul className="sub-menu">
                <li><a href="index.html">Home 01</a></li>
                <li><a href="index-2.html">Home 02</a></li>
                <li><a href="index-3.html">Home 03</a></li>
                <li><a href="index-dark.html">Home 01 Dark</a></li>
                <li><a href="index-2-dark.html">Home 02 Dark</a></li>
                <li><a href="index-3-dark.html">Home 03 Dark</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Inventory</a>
              <ul className="sub-menu">
                <li><a href="inventory-with-sidebar-grid.html">Grid With Sidebar </a></li>
                <li><a href="inventory-no-sidebar-grid.html">Grid No Sidebar</a></li>
                <li><a href="inventory-with-sidebar-list.html">List With Sidebar</a></li>
                <li><a href="inventory-no-sidebar-list.html">List No Sidebar</a></li>
                <li><a href="inventory-single-classified.html">Single Classified</a></li>
                <li><a href="inventory-single-dealership.html">Single Dealership</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <li><a href="blog-with-sidebar.html">With Sidebar</a></li>
                <li><a href="blog-grid-no-sidebar.html">Grid No Sidebar</a></li>
                <li><a href="blog-single-with-sidebar.html">Single With Sidebar</a></li>
                <li><a href="blog-single-no-sidebar.html">Single No Sidebar</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li><a href="about.html">About 01</a></li>
                <li><a href="about-2.html">About 02</a></li>
                <li><a href="become-a-dealer.html">Become A Dealer</a></li>
                <li><a href="add-car.html">Add Car</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a href="error.html">Error</a></li>
                <li><a href="faq.html">FAQ's</a></li>
                <li><a href="login-register.html">Login Register</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="vehicle-compare.html">Vehicle Compare</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Dealers</a>
              <ul className="sub-menu">
                <li><a href="dealer-list.html">Dealer List</a></li>
                <li><a href="dealer-details.html">Dealer Details</a></li>
                <li><a href="dealer-register.html">Dealer Register</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div className="header-social-compare-login d-flex align-items-center">
          <div className="header-social-menu">
            <SocialLinks/>
          </div>
          <div className="header-compare-login">
            <ul className="compare-login">
              <li>
                <a href="vehicle-compare.html">
                  <CompareArrows/>
                  <span>Compare</span> 
                  <span className="compare-badge">3</span>
                </a>
              </li>
              <li><a href="login-register.html"><AccountCircle/><span>Log in</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-mobile-menu header-mobile-menu-dark d-lg-none">
    <div className="container">
      <div className="header-mobile-wrapper d-flex justify-content-between align-items-center">
        <Logo/>
        <div className="header-mobile-meta">
          <ul className="meta d-flex">
            <li><a className="toggle-bar navbar-mobile-open" href="javascript:;"><Menu/></a></li>
            <li>
              <a href="vehicle-compare.html">
                <CompareArrows/>
                <span className="compare-badge">3</span>
              </a>
            </li>
            <li><a href="login-register.html"><AccountCircle/></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mobile-navigation">
      <a href="javascript:;" className="close-navbar-mobile"><i className="fal fa-times" /></a>
      <nav className="site-navigation">
        <ul className="main-menu">
          <li>
            <a className="active" href="#">Home </a>
            <ul className="sub-menu">
              <li><a href="index.html">Home 01</a></li>
              <li><a href="index-2.html">Home 02</a></li>
              <li><a href="index-3.html">Home 03</a></li>
              <li><a href="index-dark.html">Home 01 Dark</a></li>
              <li><a href="index-2-dark.html">Home 02 Dark</a></li>
              <li><a href="index-3-dark.html">Home 03 Dark</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Inventory</a>
            <ul className="sub-menu">
              <li><a href="inventory-with-sidebar-grid.html">Grid With Sidebar </a></li>
              <li><a href="inventory-no-sidebar-grid.html">Grid No Sidebar</a></li>
              <li><a href="inventory-with-sidebar-list.html">List With Sidebar</a></li>
              <li><a href="inventory-no-sidebar-list.html">List No Sidebar</a></li>
              <li><a href="inventory-single-classified.html">Single Classified</a></li>
              <li><a href="inventory-single-dealership.html">Single Dealership</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li><a href="blog-with-sidebar.html">With Sidebar</a></li>
              <li><a href="blog-grid-no-sidebar.html">Grid No Sidebar</a></li>
              <li><a href="blog-single-with-sidebar.html">Single With Sidebar</a></li>
              <li><a href="blog-single-no-sidebar.html">Single No Sidebar</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li><a href="about.html">About 01</a></li>
              <li><a href="about-2.html">About 02</a></li>
              <li><a href="become-a-dealer.html">Become A Dealer</a></li>
              <li><a href="add-car.html">Add Car</a></li>
              <li><a href="coming-soon.html">Coming Soon</a></li>
              <li><a href="error.html">Error</a></li>
              <li><a href="faq.html">FAQ's</a></li>
              <li><a href="login-register.html">Login Register</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="vehicle-compare.html">Vehicle Compare</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Dealers</a>
            <ul className="sub-menu">
              <li><a href="dealer-list.html">Dealer List</a></li>
              <li><a href="dealer-details.html">Dealer Details</a></li>
              <li><a href="dealer-register.html">Dealer Register</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <div className="copyright">
        <p>Copyright 2020 © <a href="https://hasthemes.com/">HasThemes</a> . All Rights Reserved</p>
      </div>
    </div>
  </div>
        </>
    )
}
