import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    // <footer className="footer">
    //   <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
    // </footer>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p className='text'>Copyright &copy; 2023 Shloka Mahesheka</p>
                    
                    {/* - Designed by <a rel="nofollow" href="https://templatemo.com" class="tm-text-link" target="_parent">TemplateMo</a></p> */}
                    
                    {/* <!-- You shall support us a little via PayPal to info@templatemo.com --> */}
                    
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
