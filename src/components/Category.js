import React , { Component } from 'react';

import AjaxLoginError from './blocks/Ajax-login-error';
import SidebarLeft from './blocks/SidebarLeft';

import '../js/jquery.easydropdown.min.js';
import '../js/jquery.animateNumber.js';
import '../js/product-media.js';
import '../js/swatches-list.js';

class Category extends Component {

  componentDidMount() {
    decorateGeneric($$('ul.products-grid'), ['odd','even','first','last']);

    $j(document).on('product-media-loaded', function() {
      ConfigurableMediaImages.init('small_image');
      ConfigurableMediaImages.setImageFallback(1, $j.parseJSON('{"option_labels":[],"small_image":{"1":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/r\/h\/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_1_-_.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(12, $j.parseJSON('{"option_labels":[],"small_image":{"12":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/n\/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_3.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(13, $j.parseJSON('{"option_labels":[],"small_image":{"13":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/1\/_\/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_4.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(14, $j.parseJSON('{"option_labels":[],"small_image":{"15":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/s\/u\/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_4_1.png","16":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/s\/u\/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_3_1.png","17":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/s\/u\/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_1_1.png","18":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/s\/u\/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_2_1.png","14":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/s\/u\/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_4.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(19, $j.parseJSON('{"option_labels":[],"small_image":{"20":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/o\/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_2_1_1.png","21":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/o\/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_1_1_1.png","22":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/o\/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_3_1_1.png","23":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/o\/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_6_1_1.png","19":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/o\/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_2_1.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(24, $j.parseJSON('{"option_labels":[],"small_image":{"25":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/e\/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_3_1.png","26":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/e\/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_2_1.png","27":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/e\/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_1_1.png","28":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/e\/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_6_1.png","24":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/g\/e\/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_1.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(29, $j.parseJSON('{"option_labels":[],"small_image":{"30":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/b\/u\/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_5_1.png","31":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/b\/u\/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_3_1.png","32":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/b\/u\/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_2_1.png","33":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/b\/u\/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_1_1.png","29":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/b\/u\/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_5.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(34, $j.parseJSON('{"option_labels":[],"small_image":{"35":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_strap_ball_gown_in_lace_wedding_dress_2_1.png","36":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_strap_ball_gown_in_lace_wedding_dress_3_1.png","37":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_strap_ball_gown_in_lace_wedding_dress_4_1.png","38":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_strap_ball_gown_in_lace_wedding_dress_1_1.png","34":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_strap_ball_gown_in_lace_wedding_dress_1.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(39, $j.parseJSON('{"option_labels":[],"small_image":{"40":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_1_1.png","41":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_2_1.png","42":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_3_1.png","43":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_4_1.png","39":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_1.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(11, $j.parseJSON('{"option_labels":[],"small_image":{"11":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_1.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(10, $j.parseJSON('{"option_labels":[],"small_image":{"10":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/a\/-\/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_1.png"},"base_image":[]}'));
      ConfigurableMediaImages.setImageFallback(2, $j.parseJSON('{"option_labels":[],"small_image":{"2":"https:\/\/livedemo00.template-help.com\/magento_55583\/media\/catalog\/product\/cache\/1\/small_image\/270x\/602f0fa2c1f0d1ba5e241f914e856ff9\/n\/i\/niceeshop_tm_key_chains_1.png"},"base_image":[]}'));
      $j(document).trigger('configurable-media-images-init', ConfigurableMediaImages);
    });

    decorateList('poll-answers');
  }

  validatePollAnswerIsSelected()
  {
    var options = $$('input.poll_vote');
    for( i in options ) {
      if( options[i].checked == true ) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div className="main-container col2-left-layout">
        <div className="breadcrumbs">
          <div className="container">
            <ul>
              <li className="home">
                <a href="https://livedemo00.template-help.com/magento_55583/" title="Go to Home Page">Home</a>
                <span className="fa fa-angle-right"></span>
              </li>
              <li className="category22">
                <strong>{this.props.cate}</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="main">
                <div className="row">
                  <div className="col-main col-xs-12 col-sm-9">


                    <AjaxLoginError />

                    <div className="page-title category-title">
                      <h1>{this.props.cate.toUpperCase()}</h1>
                    </div>
                    <div className="category-products">
                      <div className="toolbar">
                        <div className="sorter">
                          <p className="view-mode">
                            <label>View as</label>
                            <strong title="Grid" className="grid">Grid</strong>
                            <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;mode=list&amp;order=position" title="List" className="list">List</a>
                          </p>
                          <div className="sort-by">
                            <label>Sort By</label>
                            <select onChange={()=>{setLocation(this.value)}} className="form-control" id="EasyDropDown4A91C5"> title="Sort By"&gt;
                              <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=position" selected>Position </option>
                              <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=name">Name </option>
                              <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=price">Price </option>
                            </select>
                            <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=position" className="sort-by-switcher sort-by-switcher--desc" title="Set Ascending Direction">Set Ascending Direction</a>
                          </div>
                        </div>
                        <div className="pager">
                          <div className="count-container">
                            <p className="amount amount--has-pages">1-12 of 20 </p>
                            <div className="limiter">
                              <label>Show</label>
                              <select onChange={()=>{setLocation(this.value)}} title="Results per page" className="" id="EasyDropDownA54808">
                                <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;limit=12&amp;order=position" selected>12 </option>
                                <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;limit=24&amp;order=position">24 </option>
                                <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;limit=36&amp;order=position">36 </option>
                              </select>
                            </div>
                          </div>
                          <div className="pages">
                            <strong>Page:</strong>
                            <ol>
                              <li className="current">1</li>
                              <li><a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;p=2">2</a></li>
                              <li>
                                <a className="next i-next" href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;p=2" title="Next">
                                  Next
                                </a>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <ul className="products-grid row first odd">
                        <li className="item first col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/rhinestone-pearl-vintage-white-ivory-lace-wedding-garter-set-bridal-prom-gift.html" title="Rhinestone Pearl Vintage White Ivory Lace Wedding Garter Set Bridal Prom Gift" className="product-image" itemProp="url">
                                <img id="product-collection-image-1" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_1_-_.png" alt="Rhinestone Pearl Vintage White Ivory Lace Wedding Garter Set Bridal Prom Gift" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_3_-_.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_3_-_.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_5_-_.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_5_-_.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_4_-_.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/r/h/rhinestone_pearl_vintage_white_ivory_lace_wedding_garter_set_bridal_prom_gift_4_-_.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/rhinestone-pearl-vintage-white-ivory-lace-wedding-garter-set-bridal-prom-gift.html" title="Rhinestone Pearl Vintage White Ivory Lace Wedding Garter Set Bridal Prom Gift">
                                  Rhinestone Pearl Vin...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-1">
                                  <span className="price">$75.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <button type="button" title="Add to Cart" className="button btn-cart" onClick={()=>{setLocation('https://livedemo00.template-help.com/magento_55583/checkout/cart/add/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/product/1/form_key/DBGIhCfnKTR1KTuZ/')}}><span><span>Add to Cart</span></span></button>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/1/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/1/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/angel-formal-dress-women-s-v-neck-lace-wedding-dress-for-bride.html" title="Angel Formal Dress Women's V-neck Lace Wedding Dress for Bride" className="product-image" itemProp="url">
                                <img id="product-collection-image-12" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_3.png" alt="Angel Formal Dress Women's V-neck Lace Wedding Dress for Bride" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_1.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_1.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_3.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_5.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/n/angel_formal_dress_women_s_v-neck_lace_wedding_dress_for_bride_5.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/angel-formal-dress-women-s-v-neck-lace-wedding-dress-for-bride.html" title="Angel Formal Dress Women's V-neck Lace Wedding Dress for Bride">
                                  Angel Formal Dress W...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-12">
                                  <span className="price">$1,455.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="ratings">
                                  <div className="rating-box stars">
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <div className="rating" style={{width:'100%'}}>
                                      <div className="mask">
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="amount"><a href="#" onClick={()=>{var t = opener ? opener.window : window; t.location.href='https://livedemo00.template-help.com/magento_55583/review/product/list/id/12/category/22/'; return false;}}>1 Review(s)</a></span>
                                </div>
                                <div className="actions">
                                  <button type="button" title="Add to Cart" className="button btn-cart" onClick={()=>{setLocation('https://livedemo00.template-help.com/magento_55583/angel-formal-dress-women-s-v-neck-lace-wedding-dress-for-bride.html')}}><span><span>Add to Cart</span></span></button>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/12/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/12/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item last col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/1-pair-mens-silver-oval-wedding-cufflinks-groom-best-man-usher-page-boy-cuff-link-gift.html" title="1 Pair Mens Silver Oval Wedding Cufflinks Groom Best Man Usher Page Boy Cuff Link Gift" className="product-image" itemProp="url">
                                <img id="product-collection-image-13" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_4.png" alt="1 Pair Mens Silver Oval Wedding Cufflinks Groom Best Man Usher Page Boy Cuff Link Gift" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_6.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_6.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_4.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_4.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_3.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pair_mens_silver_oval_wedding_cufflinks_groom_best_man_usher_page_boy_cuff_link_gift_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/1-pair-mens-silver-oval-wedding-cufflinks-groom-best-man-usher-page-boy-cuff-link-gift.html" title="1 Pair Mens Silver Oval Wedding Cufflinks Groom Best Man Usher Page Boy Cuff Link Gift">
                                  1 Pair Mens Silver O...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-13">
                                  <span className="price">$125.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <button type="button" title="Add to Cart" className="button btn-cart" onClick={()=>{setLocation('https://livedemo00.template-help.com/magento_55583/checkout/cart/add/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/product/13/form_key/DBGIhCfnKTR1KTuZ/')}}><span><span>Add to Cart</span></span></button>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/13/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/13/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="products-grid row even">
                        <li className="item first col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/sunvary-gorgeous-champagne-mermaid-wedding-dresses-for-bride-lace-and-chiffon.html" title="Sunvary Gorgeous Champagne Mermaid Wedding Dresses for Bride Lace and Chiffon" className="product-image" itemProp="url">
                                <img id="product-collection-image-14" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_4.png" alt="Sunvary Gorgeous Champagne Mermaid Wedding Dresses for Bride Lace and Chiffon" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_5.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_5.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_3.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_4.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/s/u/sunvary_gorgeous_champagne_mermaid_wedding_dresses_for_bride_lace_and_chiffon_4.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/sunvary-gorgeous-champagne-mermaid-wedding-dresses-for-bride-lace-and-chiffon.html" title="Sunvary Gorgeous Champagne Mermaid Wedding Dresses for Bride Lace and Chiffon">
                                  Sunvary Gorgeous Cha...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-14">
                                  <span className="price">$1,562.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="ratings">
                                  <div className="rating-box stars">
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <div className="rating" style={{width:'93%'}}>
                                      <div className="mask">
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="amount"><a href="#" onClick="var t = opener ? opener.window : window; t.location.href='https://livedemo00.template-help.com/magento_55583/review/product/list/id/14/category/22/'; return false;">1 Review(s)</a></span>
                                </div>
                                <div className="actions">
                                  <a title="View Details" className="button btn-details" href="https://livedemo00.template-help.com/magento_55583/sunvary-gorgeous-champagne-mermaid-wedding-dresses-for-bride-lace-and-chiffon.html"><span><span>View Details</span></span></a>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/14/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/14/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/gorgeous-bridal-2015-elegant-trumpet-evening-gown-bridal-gown-free-bracelet.html" title="Gorgeous Bridal 2015 Elegant Trumpet Evening Gown Bridal Gown (Free Bracelet)" className="product-image" itemProp="url">
                                <img id="product-collection-image-19" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_2_1.png" alt="Gorgeous Bridal 2015 Elegant Trumpet Evening Gown Bridal Gown (Free Bracelet)" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_3_1.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_3_1.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_4_1.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_4_1.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_5_1.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgeous_bridal_2015_elegant_trumpet_evening_gown_bridal_gown_free_bracelet_5_1.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/gorgeous-bridal-2015-elegant-trumpet-evening-gown-bridal-gown-free-bracelet.html" title="Gorgeous Bridal 2015 Elegant Trumpet Evening Gown Bridal Gown (Free Bracelet)">
                                  Gorgeous Bridal 2015...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-19">
                                  <span className="price">$1,580.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <a title="View Details" className="button btn-details" href="https://livedemo00.template-help.com/magento_55583/gorgeous-bridal-2015-elegant-trumpet-evening-gown-bridal-gown-free-bracelet.html"><span><span>View Details</span></span></a>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/19/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/19/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item last col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/george-bride-luxury-vintage-capped-sleeves-mermaid-lace-wedding-dress.html" title="GEORGE BRIDE luxury vintage capped sleeves mermaid lace Wedding dress" className="product-image" itemProp="url">
                                <img id="product-collection-image-24" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_1.png" alt="GEORGE BRIDE luxury vintage capped sleeves mermaid lace Wedding dress" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb" style={{opacity: '1', display: 'none'}}>
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_3.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb" style={{opacity: '1', display: 'none'}}>
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_2.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_2.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb" style={{opacity: '1', display: 'none'}}>
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_6.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/g/e/george_bride_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_6.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/george-bride-luxury-vintage-capped-sleeves-mermaid-lace-wedding-dress.html" title="GEORGE BRIDE luxury vintage capped sleeves mermaid lace Wedding dress">
                                  GEORGE BRIDE luxury ...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-24">
                                  <span className="price">$1,560.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <a title="View Details" className="button btn-details" href="https://livedemo00.template-help.com/magento_55583/george-bride-luxury-vintage-capped-sleeves-mermaid-lace-wedding-dress.html"><span><span>View Details</span></span></a>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/24/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/24/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="products-grid row odd">
                        <li className="item first col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/buychic-luxury-vintage-capped-sleeves-mermaid-lace-wedding-dress.html" title="BuyChic luxury vintage capped sleeves mermaid lace Wedding dress" className="product-image" itemProp="url">
                                <img id="product-collection-image-29" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_5.png" alt="BuyChic luxury vintage capped sleeves mermaid lace Wedding dress" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_3.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_5.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_5.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_2.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/b/u/buychic_luxury_vintage_capped_sleeves_mermaid_lace_wedding_dress_2.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/buychic-luxury-vintage-capped-sleeves-mermaid-lace-wedding-dress.html" title="BuyChic luxury vintage capped sleeves mermaid lace Wedding dress">
                                  BuyChic luxury vinta...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-29">
                                  <span className="price">$1,426.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <a title="View Details" className="button btn-details" href="https://livedemo00.template-help.com/magento_55583/buychic-luxury-vintage-capped-sleeves-mermaid-lace-wedding-dress.html"><span><span>View Details</span></span></a>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/29/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/29/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-strap-ball-gown-in-lace-wedding-dress.html" title="A-plum White Strap Ball Gown In Lace Wedding Dress " className="product-image" itemProp="url">
                                <img id="product-collection-image-34" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_1.png" alt="A-plum White Strap Ball Gown In Lace Wedding Dress " width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_4.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_4.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_5.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_5.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_1.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_strap_ball_gown_in_lace_wedding_dress_1.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-strap-ball-gown-in-lace-wedding-dress.html" title="A-plum White Strap Ball Gown In Lace Wedding Dress ">
                                  A-plum White Strap B...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-34">
                                  <span className="price">$1,365.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="ratings">
                                  <div className="rating-box stars">
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <div className="rating" style={{width:'93%'}}>
                                      <div className="mask">
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="amount"><a href="#" onClick="var t = opener ? opener.window : window; t.location.href='https://livedemo00.template-help.com/magento_55583/review/product/list/id/34/category/22/'; return false;">1 Review(s)</a></span>
                                </div>
                                <div className="actions">
                                  <a title="View Details" className="button btn-details" href="https://livedemo00.template-help.com/magento_55583/a-plum-white-strap-ball-gown-in-lace-wedding-dress.html"><span><span>View Details</span></span></a>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/34/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/34/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item last col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-v-neck-ball-gown-in-lace-wedding-dress.html" title="A-plum White V-Neck Ball Gown In Lace Wedding Dress" className="product-image" itemProp="url">
                                <img id="product-collection-image-39" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_1.png" alt="A-plum White V-Neck Ball Gown In Lace Wedding Dress" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_5.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_5.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_2.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_2.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_4.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_v-neck_ball_gown_in_lace_wedding_dress_4.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-v-neck-ball-gown-in-lace-wedding-dress.html" title="A-plum White V-Neck Ball Gown In Lace Wedding Dress">
                                  A-plum White V-Neck ...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-39">
                                  <span className="price">$1,465.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <a title="View Details" className="button btn-details" href="https://livedemo00.template-help.com/magento_55583/a-plum-white-v-neck-ball-gown-in-lace-wedding-dress.html"><span><span>View Details</span></span></a>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/39/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/39/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="products-grid row last even">
                        <li className="item first col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-removable-sleeveless-ball-gown-in-lace-wedding-dress.html" title="A-plum White Removable Sleeveless Ball Gown In Lace Wedding Dress" className="product-image" itemProp="url">
                                <img id="product-collection-image-11" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_1.png" alt="A-plum White Removable Sleeveless Ball Gown In Lace Wedding Dress" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_5.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_5.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_2.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_2.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_3.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_removable_sleeveless_ball_gown_in_lace_wedding_dress_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-removable-sleeveless-ball-gown-in-lace-wedding-dress.html" title="A-plum White Removable Sleeveless Ball Gown In Lace Wedding Dress">
                                  A-plum White Removab...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-11">
                                  <span className="price">$1,450.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="ratings">
                                  <div className="rating-box stars">
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <div className="rating" style={{width:'93%'}}>
                                      <div className="mask">
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="amount"><a href="#" onClick="var t = opener ? opener.window : window; t.location.href='https://livedemo00.template-help.com/magento_55583/review/product/list/id/11/category/22/'; return false;">1 Review(s)</a></span>
                                </div>
                                <div className="actions">
                                  <button type="button" title="Add to Cart" className="button btn-cart" onClick={()=>{setLocation('https://livedemo00.template-help.com/magento_55583/checkout/cart/add/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/product/11/form_key/DBGIhCfnKTR1KTuZ/')}}><span><span>Add to Cart</span></span></button>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/11/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/11/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-sleeveless-ball-gown-in-lace-wedding-dress.html" title="A-plum White Sleeveless Ball Gown In Lace Wedding Dress" className="product-image" itemProp="url">
                                <img id="product-collection-image-10" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_1.png" alt="A-plum White Sleeveless Ball Gown In Lace Wedding Dress" width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_1.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_1.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_2.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_2.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_3.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/-/a-plum_white_sleeveless_ball_gown_in_lace_wedding_dress_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/a-plum-white-sleeveless-ball-gown-in-lace-wedding-dress.html" title="A-plum White Sleeveless Ball Gown In Lace Wedding Dress">
                                  A-plum White Sleevel...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-10">
                                  <span className="price">$1,365.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="ratings">
                                  <div className="rating-box stars">
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <i className="material-design-bookmark45"></i>
                                    <div className="rating" style={{width:'93%'}}>
                                      <div className="mask">
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                        <i className="material-design-bookmark45"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="amount"><a href="#" onClick={()=>{var t = opener ? opener.window : window; t.location.href='https://livedemo00.template-help.com/magento_55583/review/product/list/id/10/category/22/'; return false;}}>1 Review(s)</a></span>
                                </div>
                                <div className="actions">
                                  <button type="button" title="Add to Cart" className="button btn-cart" onClick={()=>{setLocation('https://livedemo00.template-help.com/magento_55583/checkout/cart/add/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/product/10/form_key/DBGIhCfnKTR1KTuZ/')}}><span><span>Add to Cart</span></span></button>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/10/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/10/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                        <li className="item last col-xs-12 col-sm-4" itemScope="" itemType="https://schema.org/product">
                          <div className="wrapper-hover">
                            <div className="product-image-container">
                              <a href="https://livedemo00.template-help.com/magento_55583/niceeshop-tm-key-chains.html" title="niceeshop(TM) Key Chains " className="product-image" itemProp="url">
                                <img id="product-collection-image-2" src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_1.png" alt="niceeshop(TM) Key Chains " width="270" height="270"/>
                              </a>
                              <ul className="product-thumbs">
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_2.png" className="active">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_2.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_6.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_6.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                                <li className="product-thumb">
                                  <a href="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/small_image/270x/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_3.png">
                                    <img src="https://livedemo00.template-help.com/magento_55583/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/n/i/niceeshop_tm_key_chains_3.png" width="60" height="60" alt=""/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">
                                <a href="https://livedemo00.template-help.com/magento_55583/niceeshop-tm-key-chains.html" title="niceeshop(TM) Key Chains ">
                                  niceeshop(TM) Key Ch...
                                </a>
                              </h2>
                              <div className="price-box">
                                <span className="regular-price" id="product-price-2">
                                  <span className="price">$25.00</span>
                                </span>
                              </div>
                              <div className="wrapper-hover-hiden">
                                <div className="actions">
                                  <button type="button" title="Add to Cart" className="button btn-cart" onClick={()=>{setLocation('https://livedemo00.template-help.com/magento_55583/checkout/cart/add/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/product/2/form_key/DBGIhCfnKTR1KTuZ/')}}><span><span>Add to Cart</span></span></button>
                                  <ul className="add-to-links">
                                    <li><a href="https://livedemo00.template-help.com/magento_55583/wishlist/index/add/product/2/form_key/DBGIhCfnKTR1KTuZ/" className="link-wishlist">Add to Wishlist</a></li>
                                    <li><span className="separator">|</span> <a href="https://livedemo00.template-help.com/magento_55583/catalog/product_compare/add/product/2/uenc/aHR0cDovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vbWFnZW50b181NTU4My9saW5nZXJpZS5odG1sP2Rpcj1kZXNjJm9yZGVyPXBvc2l0aW9u/form_key/DBGIhCfnKTR1KTuZ/" className="link-compare">Add to Compare</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="label-product">
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="toolbar-bottom">
                        <div className="toolbar">
                          <div className="sorter">
                            <p className="view-mode">
                              <label>View as</label>
                              <strong title="Grid" className="grid">Grid</strong>
                              <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;mode=list&amp;order=position" title="List" className="list">List</a>
                            </p>
                            <div className="sort-by">
                              <label>Sort By</label>
                              <div className="dropdown">
                                <span className="old">
                                  <select onChange={()=>{setLocation(this.value)}} className="form-control" id="EasyDropDownFD1B00"> title="Sort By"&gt;
                                    <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=position" selected>Position </option>
                                    <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=name">Name </option>
                                    <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=price">Price </option>
                                  </select>
                                </span>
                                <span className="selected">Position </span>
                                <span className="carat"></span>
                                <div>
                                  <ul>
                                    <li className="active">Position </li>
                                    <li>Name </li>
                                    <li>Price </li>
                                  </ul>
                                </div>
                              </div>
                              <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=asc&amp;order=position" className="sort-by-switcher sort-by-switcher--desc" title="Set Ascending Direction">Set Ascending Direction</a>
                            </div>
                          </div>
                          <div className="pager">
                            <div className="count-container">
                              <p className="amount amount--has-pages">
                                1-12 of 20
                              </p>
                              <div className="limiter">
                                <label>Show</label>
                                <div className="dropdown">
                                  <span className="old">
                                    <select onChange={()=>{setLocation(this.value)}} title="Results per page" className="" id="EasyDropDown44025A">
                                      <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;limit=12&amp;order=position" selected>12 </option>
                                      <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;limit=24&amp;order=position">24 </option>
                                      <option value="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;limit=36&amp;order=position">36 </option>
                                    </select>
                                  </span>
                                  <span className="selected">12 </span>
                                  <span className="carat"></span>
                                  <div>
                                    <ul>
                                      <li className="active">12 </li>
                                      <li>24 </li>
                                      <li>36 </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pages">
                              <strong>Page:</strong>
                              <ol>
                                <li className="current">1</li>
                                <li><a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;p=2">2</a></li>
                                <li>
                                  <a className="next i-next" href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;p=2" title="Next">
                                    Next
                                  </a>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SidebarLeft />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
