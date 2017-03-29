import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import URL from '../../config';

class Header extends Component {

  componentDidMount() {
    var searchForm = new Varien.searchForm('search_mini_form', 'search', '');
    searchForm.initautoComplete('https://livedemo00.template-help.com/magento_55583/catalogsearch/ajax/suggest/', 'search_autoComplete');
  }

  render() {
    return (
      <header id="header" className="page-header">
        <div className="header-row-background">
          <div className="container">
            <div className="header-row">

            </div>
          </div>
        </div>
        <div className="container">
          <div className="page-header-container">
            <Link className="logo" to="/">
              <img src={URL+"/public/img/logo.png"} alt="Magento Commerce"/>
            </Link>
            <div className="f-right">
              <div className="header-switchers">
                <span className="material-design-settings49"></span>
                <div style={{}} className="switchers-content">
                  <div className="header-button lang-list">
                    <Link title="Language" to="#">en</Link>
                    <ul style={{}}>
                      <li>
                        <Link className="selected" to="https://livedemo00.template-help.com/magento_55583/?___store=english&amp;___from_store=english" title="en_US">English</Link>
                      </li>
                      <li>
                        <Link to="https://livedemo00.template-help.com/magento_55583/?___store=german&amp;___from_store=english" title="de_DE">German</Link>
                      </li>
                      <li>
                        <Link to="https://livedemo00.template-help.com/magento_55583/?___store=spanish&amp;___from_store=english" title="es_ES">Spanish</Link>
                      </li>
                      <li>
                        <Link to="https://livedemo00.template-help.com/magento_55583/?___store=russian&amp;___from_store=english" title="ru_RU">Russian</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-button currency-list">
                    <Link title="Currency" to="#">USD</Link>
                    <ul style={{}}>
                      <li>
                        <Link to="https://livedemo00.template-help.com/magento_55583/directory/currency/switch/currency/EUR/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My8,/" title="EUR">Euro - EUR</Link>
                      </li>
                      <li>
                        <Link className="selected" to="https://livedemo00.template-help.com/magento_55583/directory/currency/switch/currency/USD/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My8,/" title="USD">US Dollar - USD</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-minicart desktop">
                <Link to="/checkout/cart" data-target-element="#header-cart" className="skip-link skip-cart  no-count">
                  <span className="icon"></span>
                  <span className="label">Cart</span>
                  <span className="count">0</span>
                </Link>
                <div id="header-cart" className="block block-cart skip-content">
                  <div id="minicart-error-message" className="minicart-message"></div>
                  <div id="minicart-success-message" className="minicart-message"></div>
                  <div className="minicart-wrapper">
                    <p className="block-subtitle">Recently added item(s) <Link className="close skip-link-close material-design-cancel19" to="#" title="Close"></Link></p>
                    <p className="empty">You have no items in your shopping cart.</p>
                  </div>
                </div>
              </div>

              <div className="top-links">
                <span className="material-design-user157"></span>
                <div style={{}} className="top-links-inline">
                  <div className="links">
                    <ul>
                      <li className="first"><Link to="/customer/account" title="My Account" className="my-account-link">My Account</Link></li>
                      <li><Link to="/wishlist" title="My Wishlist" className="wishlist-link">My Wishlist</Link></li>

                      <li><Link to="/checkout" title="Checkout" className="top-link-checkout">Checkout</Link></li>

                      <li className=" last"><Link onClick={()=>{return false;}} to="/customer/account/login" title="Log In" className="log-in-link">Log In</Link></li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="header-search desktop">
                <form id="search_mini_form" action="https://livedemo00.template-help.com/magento_55583/catalogsearch/result/" method="get">
                  <div className="input-box">
                    <label htmlFor="search">Search:</label>
                    <input autoComplete="off" id="search" name="q" className="input-text required-entry" maxLength="128" placeholder="Search entire store here..." type="search"/>
                    <button type="submit" title="Search" className="button search-button"><span><span>Search</span></span></button>
                  </div>
                  <div style={{display: 'none'}} id="search_autoComplete" className="search-autoComplete"></div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <div style={{position: 'relative', top: '0px'}} className="main-menu">
          <div className="container">
            <div id="header-nav" className="skip-content nav-content">
              <div className="nav-container-mobile">
                <div className="sf-menu-block">
                  <ul className="sf-menu-phone">
                    <li className="level0 nav-1 first parent">
                      <Link to="/dresses" className="level0 has-children">Dresses</Link>
                      <ul className="level0">
                        <li className="level1 nav-1-1 first parent">
                          <Link to="/dresses/sweetheart-wedding-dresses" className="level1 has-children">Sweetheart Wedding Dresses</Link>
                          <ul className="level1">
                            <li className="level2 nav-1-1-1 first">
                              <Link to="/dresses/sweetheart-wedding-dresses/lorem-ipsum-dolor-sit-ame" className="level2 "> Lorem ipsum dolor sit ame</Link>
                            </li>
                            <li className="level2 nav-1-1-2">
                              <Link to="/dresses/sweetheart-wedding-dresses/consectetuer-adipisci" className="level2 "> Consectetuer adipisci</Link>
                            </li>
                            <li className="level2 nav-1-1-3">
                              <Link to="/dresses/sweetheart-wedding-dresses/praesent-vestibulum-molestie-lacu" className="level2 "> Praesent vestibulum molestie lacu</Link>
                            </li>
                            <li className="level2 nav-1-1-4">
                              <Link to="/dresses/sweetheart-wedding-dresses/aenean-nonummy-hendre" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-1-5">
                              <Link to="/dresses/sweetheart-wedding-dresses/phasellus-porta" className="level2 "> Phasellus porta</Link>
                            </li>
                            <li className="level2 nav-1-1-6">
                              <Link to="/dresses/sweetheart-wedding-dresses/fusce-suscipit-varius-mi" className="level2 "> Fusce suscipit varius mi</Link>
                            </li>
                            <li className="level2 nav-1-1-7">
                              <Link to="/dresses/sweetheart-wedding-dresses/cum-sociis-natoque-penatibu" className="level2 "> Cum sociis natoque penatibu</Link>
                            </li>
                            <li className="level2 nav-1-1-8">
                              <Link to="/dresses/sweetheart-wedding-dresses/aenean-nonummy-hendre-3" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-1-9 last">
                              <Link to="/dresses/sweetheart-wedding-dresses/phasellus-porta-3" className="level2 "> Phasellus porta</Link>
                            </li>
                          </ul>
                          <strong></strong>
                        </li>
                        <li className="level1 nav-1-2 parent">
                          <Link to="/dresses/princess-wedding-dresses" className="level1 has-children">Princess Wedding Dresses</Link>
                          <ul className="level1">
                            <li className="level2 nav-1-2-1 first">
                              <Link to="/dresses/princess-wedding-dresses/lorem-ipsum-dolor-sit-ame" className="level2 "> Lorem ipsum dolor sit ame</Link>
                            </li>
                            <li className="level2 nav-1-2-2">
                              <Link to="/dresses/princess-wedding-dresses/consectetuer-adipisci" className="level2 "> Consectetuer adipisci</Link>
                            </li>
                            <li className="level2 nav-1-2-3">
                              <Link to="/dresses/princess-wedding-dresses/praesent-vestibulum-molestie-lacu" className="level2 "> Praesent vestibulum molestie lacu</Link>
                            </li>
                            <li className="level2 nav-1-2-4">
                              <Link to="/dresses/princess-wedding-dresses/aenean-nonummy-hendre" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-2-5">
                              <Link to="/dresses/princess-wedding-dresses/phasellus-porta" className="level2 "> Phasellus porta</Link>
                            </li>
                            <li className="level2 nav-1-2-6">
                              <Link to="/dresses/princess-wedding-dresses/fusce-suscipit-varius-mi" className="level2 "> Fusce suscipit varius mi</Link>
                            </li>
                            <li className="level2 nav-1-2-7">
                              <Link to="/dresses/princess-wedding-dresses/cum-sociis-natoque-penatibu" className="level2 "> Cum sociis natoque penatibu</Link>
                            </li>
                            <li className="level2 nav-1-2-8">
                              <Link to="/dresses/princess-wedding-dresses/aenean-nonummy-hendre-3" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-2-9 last">
                              <Link to="/dresses/princess-wedding-dresses/phasellus-porta-3" className="level2 "> Phasellus porta</Link>
                            </li>
                          </ul>
                          <strong></strong>
                        </li>
                        <li className="level1 nav-1-3 parent">
                          <Link to="/dresses/short-wedding-dresses" className="level1 has-children">Short Wedding Dresses</Link>
                          <ul className="level1">
                            <li className="level2 nav-1-3-1 first">
                              <Link to="/dresses/short-wedding-dresses/lorem-ipsum-dolor-sit-ame" className="level2 "> Lorem ipsum dolor sit ame</Link>
                            </li>
                            <li className="level2 nav-1-3-2">
                              <Link to="/dresses/short-wedding-dresses/consectetuer-adipisci" className="level2 "> Consectetuer adipisci</Link>
                            </li>
                            <li className="level2 nav-1-3-3">
                              <Link to="/dresses/short-wedding-dresses/praesent-vestibulum-molestie-lacu" className="level2 "> Praesent vestibulum molestie lacu</Link>
                            </li>
                            <li className="level2 nav-1-3-4">
                              <Link to="/dresses/short-wedding-dresses/aenean-nonummy-hendre" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-3-5">
                              <Link to="/dresses/short-wedding-dresses/phasellus-porta" className="level2 "> Phasellus porta</Link>
                            </li>
                            <li className="level2 nav-1-3-6">
                              <Link to="/dresses/short-wedding-dresses/fusce-suscipit-varius-mi" className="level2 "> Fusce suscipit varius mi</Link>
                            </li>
                            <li className="level2 nav-1-3-7">
                              <Link to="/dresses/short-wedding-dresses/cum-sociis-natoque-penatibu" className="level2 "> Cum sociis natoque penatibu</Link>
                            </li>
                            <li className="level2 nav-1-3-8">
                              <Link to="/dresses/short-wedding-dresses/aenean-nonummy-hendre-3" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-3-9 last">
                              <Link to="/dresses/short-wedding-dresses/phasellus-porta-3" className="level2 "> Phasellus porta</Link>
                            </li>
                          </ul>
                          <strong></strong>
                        </li>
                        <li className="level1 nav-1-4 last parent">
                          <Link to="/dresses/wedding-dresses-with-sleeves" className="level1 has-children">Wedding Dresses With Sleeves</Link>
                          <ul className="level1">
                            <li className="level2 nav-1-4-1 first">
                              <Link to="/dresses/wedding-dresses-with-sleeves/lorem-ipsum-dolor-sit-ame" className="level2 "> Lorem ipsum dolor sit ame</Link>
                            </li>
                            <li className="level2 nav-1-4-2">
                              <Link to="/dresses/wedding-dresses-with-sleeves/consectetuer-adipisci" className="level2 "> Consectetuer adipisci</Link>
                            </li>
                            <li className="level2 nav-1-4-3">
                              <Link to="/dresses/wedding-dresses-with-sleeves/praesent-vestibulum-molestie-lacu" className="level2 "> Praesent vestibulum molestie lacu</Link>
                            </li>
                            <li className="level2 nav-1-4-4">
                              <Link to="/dresses/wedding-dresses-with-sleeves/aenean-nonummy-hendre" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-4-5">
                              <Link to="/dresses/wedding-dresses-with-sleeves/phasellus-porta-3" className="level2 "> Phasellus porta</Link>
                            </li>
                            <li className="level2 nav-1-4-6">
                              <Link to="/dresses/wedding-dresses-with-sleeves/fusce-suscipit-varius-mi" className="level2 "> Fusce suscipit varius mi</Link>
                            </li>
                            <li className="level2 nav-1-4-7">
                              <Link to="/dresses/wedding-dresses-with-sleeves/cum-sociis-natoque-penatibu" className="level2 "> Cum sociis natoque penatibu</Link>
                            </li>
                            <li className="level2 nav-1-4-8">
                              <Link to="/dresses/wedding-dresses-with-sleeves/aenean-nonummy-hendre-3" className="level2 "> Aenean nonummy hendre</Link>
                            </li>
                            <li className="level2 nav-1-4-9 last">
                              <Link to="/dresses/wedding-dresses-with-sleeves/phasellus-porta" className="level2 "> Phasellus porta</Link>
                            </li>
                          </ul>
                          <strong></strong>
                        </li>
                      </ul>
                      <strong></strong>
                    </li>
                    <li className="level0 nav-2">
                      <Link to="/suits" className="level0 ">Suits</Link>
                    </li>
                    <li className="level0 nav-3">
                      <Link to="/shoes" className="level0 ">Shoes</Link>
                    </li>
                    <li className="level0 nav-4">
                      <Link to="/lingerie" className="level0 ">Lingerie</Link>
                    </li>
                    <li className="level0 nav-5">
                      <Link to="/brands" className="level0 ">Brands</Link>
                    </li>
                    <li className="level0 nav-6 last">
                      <Link to="/flowers" className="level0 ">Flowers</Link>
                    </li>
                  </ul>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="nav-container">
                <div className="nav">
                  <ul id="nav" className="grid-full">
                    <li className="level nav-1 first parent  no-level-thumbnail">
                      <Link className="" style={{backgroundColor:''}} to="/dresses">
                        <div className="thumbnail"></div>
                        <span style={{color:''}}>Dresses</span>
                        <span className="spanchildren"></span>
                      </Link>
                      <div style={{display: 'none', opacity: '0'}} className="level-top">
                        <div className="level  column4" style={{width:'930px'}}>
                          <ul className=" level">
                            <li className="">
                              <ul className="catagory_children">
                                <li className="li-wrapper">
                                  <div className="level1 nav-1-1 first parent item  no-level-thumbnail " style={{width:'21.842105263158%'}}>
                                    <Link style={{}} className="catagory-level1" to="/dresses/sweetheart-wedding-dresses">
                                      <div className="thumbnail"></div>
                                      <span style={{color:''}}>Sweetheart Wedding Dresses</span><span className="spanchildren"></span>
                                    </Link>
                                    <div className="level-top">
                                      <div className="level1  column1">
                                        <ul className="d level1">
                                          <li className="catagory_children  column1">
                                            <div className="level2 nav-1-1-1 first  no-level-thumbnail ">
                                              <Link className="" style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/lorem-ipsum-dolor-sit-ame">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Lorem ipsum dolor sit ame</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-2  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/consectetuer-adipisci">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Consectetuer adipisci</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-3  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/praesent-vestibulum-molestie-lacu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Praesent vestibulum molestie lacu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-4  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/aenean-nonummy-hendre">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-5  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/phasellus-porta">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-6  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/fusce-suscipit-varius-mi">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Fusce suscipit varius mi</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-7  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/cum-sociis-natoque-penatibu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Cum sociis natoque penatibu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-8  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/aenean-nonummy-hendre-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-1-9 last  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/sweetheart-wedding-dresses/phasellus-porta-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2">
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="level1 nav-1-2 parent item  no-level-thumbnail" style={{width:'21.842105263158%'}}>
                                    <Link style={{}} className="catagory-level1" to="/dresses/princess-wedding-dresses">
                                      <div className="thumbnail"></div>
                                      <span style={{color:''}}>Princess Wedding Dresses</span><span className="spanchildren"></span>
                                    </Link>
                                    <div className="level-top">
                                      <div className="level1  column1">
                                        <ul className="d level1">
                                          <li className="catagory_children  column1">
                                            <div className="level2 nav-1-2-10 first  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/lorem-ipsum-dolor-sit-ame">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Lorem ipsum dolor sit ame</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-11  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/consectetuer-adipisci">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Consectetuer adipisci</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-12  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/praesent-vestibulum-molestie-lacu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Praesent vestibulum molestie lacu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-13  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/aenean-nonummy-hendre">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-14  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/phasellus-porta">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-15  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/fusce-suscipit-varius-mi">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Fusce suscipit varius mi</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-16  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/cum-sociis-natoque-penatibu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Cum sociis natoque penatibu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-17  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/aenean-nonummy-hendre-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-2-18 last  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/princess-wedding-dresses/phasellus-porta-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="level1 nav-1-3 parent item  no-level-thumbnail " style={{width:'21.842105263158%'}}>
                                    <Link style={{}} className="catagory-level1" to="/dresses/short-wedding-dresses">
                                      <div className="thumbnail"></div>
                                      <span style={{color:''}}>Short Wedding Dresses</span><span className="spanchildren"></span>
                                    </Link>
                                    <div className="level-top">
                                      <div className="level1  column1">
                                        <ul className="d level1">
                                          <li className="catagory_children  column1">
                                            <div className="level2 nav-1-3-19 first  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/lorem-ipsum-dolor-sit-ame">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Lorem ipsum dolor sit ame</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-20  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/consectetuer-adipisci">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Consectetuer adipisci</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-21  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/praesent-vestibulum-molestie-lacu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Praesent vestibulum molestie lacu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-22  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/aenean-nonummy-hendre">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-23  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/phasellus-porta">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-24  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/fusce-suscipit-varius-mi">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Fusce suscipit varius mi</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-25  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/cum-sociis-natoque-penatibu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Cum sociis natoque penatibu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-26  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/aenean-nonummy-hendre-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-3-27 last  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/short-wedding-dresses/phasellus-porta-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="level1 nav-1-4 last parent item  no-level-thumbnail " style={{width:'21.842105263158%'}}>
                                    <Link style={{}} className="catagory-level1" to="/dresses/wedding-dresses-with-sleeves">
                                      <div className="thumbnail"></div>
                                      <span style={{color:''}}>Wedding Dresses With Sleeves</span><span className="spanchildren"></span>
                                    </Link>
                                    <div className="level-top">
                                      <div className="level1  column1">
                                        <ul className="d level1">
                                          <li className="catagory_children  column1">
                                            <div className="level2 nav-1-4-28 first  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/lorem-ipsum-dolor-sit-ame">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Lorem ipsum dolor sit ame</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-29  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/consectetuer-adipisci">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Consectetuer adipisci</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2">
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-30  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/praesent-vestibulum-molestie-lacu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Praesent vestibulum molestie lacu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-31  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/aenean-nonummy-hendre">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-32  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/phasellus-porta-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-33  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/fusce-suscipit-varius-mi">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Fusce suscipit varius mi</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-34  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/cum-sociis-natoque-penatibu">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Cum sociis natoque penatibu</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-35  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/aenean-nonummy-hendre-3">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Aenean nonummy hendre</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="level2 nav-1-4-36 last  no-level-thumbnail ">
                                              <Link style={{backgroundColor:''}} to="/dresses/wedding-dresses-with-sleeves/phasellus-porta">
                                                <div className="thumbnail"></div>
                                                <span style={{color:''}}> Phasellus porta</span>
                                              </Link>
                                              <div className="level-top">
                                                <div className="level2  column1">
                                                  <ul className="d level2"></ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="level nav-2  no-level-thumbnail">
                      <Link className="" style={{backgroundColor:''}} to="/suits">
                        <div className="thumbnail"></div>
                        <span style={{color:''}}>Suits</span>
                      </Link>
                      <div className="level-top">
                        <div className="level  column1" style={{width:'930px'}}>
                          <ul className=" level">
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="level nav-3  no-level-thumbnail ">
                      <Link style={{backgroundColor:''}} to="/shoes">
                        <div className="thumbnail"></div>
                        <span style={{color:''}}>Shoes</span>
                      </Link>
                      <div className="level-top">
                        <div className="level  column1" style={{width:'930px'}}>
                          <ul className=" level">
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="level nav-4  no-level-thumbnail">
                      <Link className="" style={{backgroundColor:''}} to="/lingerie">
                        <div className="thumbnail"></div>
                        <span style={{color:''}}>Lingerie</span>
                      </Link>
                      <div className="level-top">
                        <div className="level  column1" style={{width:'930px'}}>
                          <ul className=" level">
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="level nav-5  no-level-thumbnail">
                      <Link className="" style={{backgroundColor:''}} to="/brands">
                        <div className="thumbnail"></div>
                        <span style={{color:''}}>Brands</span>
                      </Link>
                      <div className="level-top">
                        <div className="level  column1" style={{width:'930px'}}>
                          <ul className=" level">
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="level nav-6 last  no-level-thumbnail">
                      <Link className="" style={{backgroundColor:''}} to="/flowers">
                        <div className="thumbnail"></div>
                        <span style={{color:''}}>Flowers</span>
                      </Link>
                      <div className="level-top">
                        <div className="level  column1" style={{width:'930px'}}>
                          <ul className=" level">
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="skip-container mobile">
          <div className="container">
            <div className="skip-links">

              <Link to="#header-nav" className="skip-link skip-nav">
                <span className="icon"></span>
                <span className="label">Menu</span>
              </Link>

              <Link to="#header-search" className="skip-link skip-search">
                <span className="icon"></span>
                <span className="label">Search</span>
              </Link>

              <div id="header-search" className="skip-content">
                <form id="search_mini_form" action="https://livedemo00.template-help.com/magento_55583/catalogsearch/result/" method="get">
                  <div className="input-box">
                    <label htmlFor="search">Search:</label>
                    <input id="search" name="q" className="input-text required-entry" maxLength="128" placeholder="Search entire store here..." type="search"/>
                    <button type="submit" title="Search" className="button search-button"><span><span>Search</span></span></button>
                  </div>
                  <div id="search_autoComplete" className="search-autoComplete"></div>
                </form>
              </div>

              <Link to="https://livedemo00.template-help.com/magento_55583/customer/account/" data-target-element="#header-account" className="skip-link skip-account">
                <span className="icon"></span>
                <span className="label">Account</span>
              </Link>

              <div id="header-account" className="skip-content">
                <div className="header-button lang-list">
                  <Link title="Language" to="#">en</Link>
                  <ul style={{display: 'none'}}>
                    <li>
                      <Link className="selected" to="https://livedemo00.template-help.com/magento_55583/?___store=english&amp;___from_store=english" title="en_US">English</Link>
                    </li>
                    <li>
                      <Link to="https://livedemo00.template-help.com/magento_55583/?___store=german&amp;___from_store=english" title="de_DE">German</Link>
                    </li>
                    <li>
                      <Link to="https://livedemo00.template-help.com/magento_55583/?___store=spanish&amp;___from_store=english" title="es_ES">Spanish</Link>
                    </li>
                    <li>
                      <Link to="https://livedemo00.template-help.com/magento_55583/?___store=russian&amp;___from_store=english" title="ru_RU">Russian</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-button currency-list">
                  <Link title="Currency" to="#">USD</Link>
                  <ul style={{display: 'none'}}>
                    <li>
                      <Link to="https://livedemo00.template-help.com/magento_55583/directory/currency/switch/currency/EUR/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My8,/" title="EUR">Euro - EUR</Link>
                    </li>
                    <li>
                      <Link className="selected" to="https://livedemo00.template-help.com/magento_55583/directory/currency/switch/currency/USD/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My8,/" title="USD">US Dollar - USD</Link>
                    </li>
                  </ul>
                </div>
                <div className="links">
                  <ul>
                    <li className="first"><Link to="https://livedemo00.template-help.com/magento_55583/customer/account/" title="My Account" className="my-account-link">My Account</Link></li>
                    <li><Link to="https://livedemo00.template-help.com/magento_55583/wishlist/" title="My Wishlist" className="wishlist-link">My Wishlist</Link></li>
                    <li><Link to="https://livedemo00.template-help.com/magento_55583/checkout/cart/" title="My Cart" className="top-link-cart">My Cart</Link></li>
                    <li><Link to="https://livedemo00.template-help.com/magento_55583/checkout/" title="Checkout" className="top-link-checkout">Checkout</Link></li>
                    <li><Link onClick={()=>{return false;}} to="https://livedemo00.template-help.com/magento_55583/customer/account/create/" title="Register" className="register-link">Register</Link></li>
                    <li className=" last"><Link onClick={()=>{return false;}} to="/customer/account/login" title="Log In" className="log-in-link">Log In</Link></li>
                  </ul>
                </div>
              </div>

              <div className="header-minicart mobile">
                <Link to="https://livedemo00.template-help.com/magento_55583/checkout/cart/" data-target-element="#header-cart-mobile" className="skip-link skip-cart  no-count">
                  <span className="icon"></span>
                  <span className="label">Cart</span>
                  <span className="count">0</span>
                </Link>
                <div id="header-cart-mobile" className="block block-cart skip-content">
                  <div id="minicart-error-message" className="minicart-message"></div>
                  <div id="minicart-success-message" className="minicart-message"></div>
                  <div className="minicart-wrapper">
                    <p className="block-subtitle">
                      Recently added item(s) <Link className="close skip-link-close material-design-cancel19" to="#" title="Close"></Link>
                    </p>
                    <p className="empty">You have no items in your shopping cart.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
