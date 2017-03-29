import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import URL from '../../config';

class Footer extends Component {

  year() {
    var mdate = new Date();
    return mdate.getFullYear();
  }

  componentDidMount() {
    var Translator = new Translate([]);

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-7078796-5']);
    _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'https://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P9FT69');
  }

  render() {
    return (
      <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="footer">
                  <p style={{display: 'block'}} id="back-top"><a href="#top"><span></span></a> </p>
                  <div className="footer-cols-wrapper">
                    <div className="footer-col">
                      <div className="footer_logo">
                        <Link to=""><img src={URL+"/public/img/logo.png"} alt=""/></Link>
                        <ul>
                          <li><a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a></li>
                          <li><a href="https://www.twitter.com/"><span className="fa fa-twitter"></span></a></li>
                          <li><a href="https://www.twitter.com/"><span className="fa fa-google-plus"></span></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col">
                      <h4>Information</h4>
                      <div className="footer-col-content">
                        <ul>
                          <li><a href="https://livedemo00.template-help.com/magento_55583/about">About Us</a></li>
                          <li><a href="https://livedemo00.template-help.com/magento_55583/customer-service">Customer Service</a></li>
                          <li><a href="https://livedemo00.template-help.com/magento_55583/template-settings">Template Settings</a></li>
                          <li className="last privacy"><a href="https://livedemo00.template-help.com/magento_55583/privacy-policy-cookie-restriction-mode">Privacy Policy</a></li>
                        </ul>
                        <div className="links">
                          <ul>
                            <li className="first"><a href="https://livedemo00.template-help.com/magento_55583/catalog/seo_sitemap/category/" title="Site Map">Site Map</a></li>
                            <li><a href="https://livedemo00.template-help.com/magento_55583/catalogsearch/term/popular/" title="Search Terms">Search Terms</a></li>
                            <li><a href="https://livedemo00.template-help.com/magento_55583/catalogsearch/advanced/" title="Advanced Search">Advanced Search</a></li>
                            <li><a href="https://livedemo00.template-help.com/magento_55583/sales/guest/form/" title="Orders and Returns">Orders and Returns</a></li>
                            <li className=" last"><a href="https://livedemo00.template-help.com/magento_55583/contacts/" title="Contact Us">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-col">
                      <h4>Why buy from us</h4>
                      <div className="footer-col-content">
                        <ul>
                          <li><a href="#">Shipping &amp; Returns</a></li>
                          <li><a href="#">Secure Shopping</a></li>
                          <li><a href="#">International Shipping</a></li>
                          <li><a href="#">Affiliates</a></li>
                          <li><a href="#">Group Sales</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col">
                      <h4>My account</h4>
                      <div className="footer-col-content">
                        <ul>
                          <li><a onClick={()=>{return false;}} href="https://livedemo00.template-help.com/magento_55583/customer/account/login/">Sign In</a></li>
                          <li><a href="https://livedemo00.template-help.com/magento_55583/checkout/cart/">View Cart</a></li>
                          <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/">My Wishlist</a></li>
                          <li><a href="#">Track My Order</a></li>
                          <li><a href="#">Help</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col last">
                      <h4>Contacts</h4>
                      <div className="footer-col-content">
                        8901 Marmora Road, Glasgow, <br/>
                        D04 89GR
                        <span className="tel">1(234) 567-8901</span>
                      </div>
                    </div>
                    <div className="footer-col last">

                    </div>
                    <div className="clear"></div>
                  </div>
                  <div className="clear"></div>
                  <address>© {this.year()} Magento Demo Store. All Rights Reserved.</address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe id="onloadstaticolarkcomjsclientappjs-frame" style={{width: '0px', height: '0px', position: 'absolute', left: '0px', bottom: '0px', border: 'medium none'}} data-olark="true" src="javascript:false"></iframe>
        <noscript><a href="https://www.olark.com/site/7830-582-10-3714/contact" title="Contact us" target="_blank">Questions? Feedback?</a> powered by <a href="https://www.olark.com?welcome" title="Olark live chat software">Olark live chat software</a></noscript>
        <noscript>
          <iframe src="//www.googletagmanager.com/ns.html?id=GTM-P9FT69"height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
      </div>
    );
  }
}

export default Footer;
