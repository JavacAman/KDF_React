import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Discussion<span>Forum</span></h3>

                    <p className="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">Pricing</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name"> &copy; KIET Discussion Forum-All rights reserved</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Delhi-NCR, Meerut Road (NH-58)</span> Delhi, India</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1 555 123456</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">Discussionforum@kiet.edu</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the forum</span>
                        This web based discussion forum is for KIET student , which will help them to discuss things related to: Academics, Life Style, Career &amp; KIET Locality .
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer
