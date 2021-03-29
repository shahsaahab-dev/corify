import React from 'react'
import Logo from '../components/Logo';
import {Container,Row,Col} from 'react-bootstrap/';

export default function Footer() {
    return (
        <footer className="footer-area footer-dark">
            <div className="footer-widget">
                <Container>
                <Row>
                    <Col lg={3} md={6} sm={4}>
                    <div className="text-widget mt-50">
                       <Logo/>
                        <div className="text-content">
                        <div className="single-text">
                            <p>166 Main Street, Beverly Hills <br /> CA, 90210</p>
                        </div>
                        <div className="single-text">
                            <p>
                            <span><a href="mailto:support@corify.com.uk">support@corify.com.uk</a></span>
                            <span><a href="tel:00853462188">+0085 346 2188</a></span>
                            </p>
                        </div>
                        </div>
                    </div>
                    </Col>
                    <Col lg={2} md={3} sm={4}>
                        <div className="footer-menu mt-50">
                            <h3 className="footer-title">Links</h3>
                            <ul className="menu-items">
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="blog-with-sidebar.html">Blog</a></li>
                            <li><a href="#">Career</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={4}>
                        <div className="footer-menu mt-50">
                            <h3 className="footer-title">Help Center</h3>
                            <ul className="menu-items">
                            <li><a href="faq.html">FAQs</a></li>
                            <li><a href="#">Pricing &amp; Plan</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Helps</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div className="footer-newsletter mt-50">
                        <h3 className="footer-title">Newsletter</h3>
                        <div className="newsletter-wrapper">
                        <p>Subscribe to our newsletter to get the latest cars discount promotions and other latest news stay updated.</p>
                        <div className="newsletter-form">
                            <form action="#">
                            <input type="text" placeholder="Email address" />
                            <button><i className="ion-ios-arrow-right" /></button>
                            </form>
                        </div>
                        <span>Don't worry! We don't spam</span>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="footer-text">
                <div className="container">
                <div className="footer-text-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div className="footer-copyright">
                    <p>Copyright 2020 © <a href="https://hasthemes.com/">HasThemes</a> . All Rights Reserved</p>
                    </div>
                    <div className="footer-social">
                    <span className="label">Follow us</span>
                    <ul className="socia">
                        <li><a href="#"><i className="ion-social-twitter" /></a></li>
                        <li><a href="#"><i className="ion-social-facebook" /></a></li>
                        <li><a href="#"><i className="ion-social-rss" /></a></li>
                        <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
                        <li><a href="#"><i className="ion-social-youtube-outline" /></a></li>
                    </ul>
                    </div>
                    <ul className="footer-menu-language">
                    <li><a href="#">English</a></li>
                    <li><a href="#">French</a></li>
                    <li><a href="#">German</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </footer>

    )
}
