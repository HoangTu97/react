import React , { Component } from 'react';

class SidebarLeft extends Component {
  render() {
    return (
      <div className="col-left sidebar col-xs-12 col-sm-3">
        <div className="col-left-first">
          <div className="block block-layered-nav block-layered-nav--no-filters">
            <div className="block-title">
              <strong><span>Shop by</span></strong>
            </div>
            <div className="block-content toggle-content">
              <div className="selected-filter">
              </div>
              <p className="block-subtitle block-subtitle--filter">Filter</p>
              <dl id="narrow-by-list">
                <dt className="odd">Manufacturer</dt>
                <dd className="odd">
                  <ol>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=6&amp;order=position">
                        Oscar de la Renta <span className="count">(1)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=7&amp;order=position">
                        Manuel Mota <span className="count">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=8&amp;order=position">
                        Yumi Katsura <span className="count">(1)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=9&amp;order=position">
                        Angel Sanchez <span className="count">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=10&amp;order=position">
                        Kate Sherford <span className="count">(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=11&amp;order=position">
                        Gabbiano <span className="count">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=12&amp;order=position">
                        Zhelengowsky <span className="count">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=3&amp;order=position">
                        Carolina Herrera <span className="count">(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=4&amp;order=position">
                        Vera Wong <span className="count">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;manufacturer=5&amp;order=position">
                        Simone Carvalli <span className="count">(1)</span>
                      </a>
                    </li>
                  </ol>
                </dd>
                <dt className="even">Price</dt>
                <dd className="even">
                  <ol>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;price=-1000">
                        <span className="price">$0.00</span> - <span className="price">$999.99</span> <span className="count">(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;price=1000-">
                        <span className="price">$1,000.00</span> and above <span className="count">(15)</span>
                      </a>
                    </li>
                  </ol>
                </dd>
                <dt className="last odd">Size</dt>
                <dd className="last odd">
                  <ol className="configurable-swatch-list">
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;size=13" className="swatch-link">
                        <span className="swatch-item">
                          <span className="swatch-text">S</span>
                        </span>
                        <span className="count">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;size=14" className="swatch-link">
                        <span className="swatch-item">
                          <span className="swatch-text">M</span>
                        </span>
                        <span className="count">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;size=15" className="swatch-link">
                        <span className="swatch-item">
                          <span className="swatch-text">L</span>
                        </span>
                        <span className="count">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/magento_55583/lingerie.html?dir=desc&amp;order=position&amp;size=16" className="swatch-link">
                        <span className="swatch-item">
                          <span className="swatch-text">XL</span>
                        </span>
                        <span className="count">(7)</span>
                      </a>
                    </li>
                  </ol>
                </dd>
              </dl>
              <script type="text/javascript">decorateDataList('narrow-by-list')</script>
            </div>
          </div>
        </div>
        <div className="main-col-left">
          <div className="block block-cart">
            <div className="block-title">
              <strong><span>My Cart</span></strong>
            </div>
            <div className="block-content">
              <p className="empty">You have no items in your shopping cart.</p>
            </div>
          </div>
          <div className="block block-list block-compare">
            <div className="block-title">
              <strong><span>Compare Products </span></strong>
            </div>
            <div className="block-content">
              <p className="empty">You have no items to compare.</p>
            </div>
          </div>
          <div className="block block-tags">
            <div className="block-title">
              <strong><span>Popular Tags</span></strong>
            </div>
            <div className="block-content">
              <ul className="tags-list">
                <li><a href="https://livedemo00.template-help.com/magento_55583/tag/product/list/tagId/2/" style={{fontSize:'75%'}}>Chiffon</a></li>
                <li><a href="https://livedemo00.template-help.com/magento_55583/tag/product/list/tagId/1/" style={{fontSize:'75%'}}>formal</a></li>
                <li><a href="https://livedemo00.template-help.com/magento_55583/tag/product/list/tagId/4/" style={{fontSize:'145%'}}>sleeveless</a></li>
                <li><a href="https://livedemo00.template-help.com/magento_55583/tag/product/list/tagId/3/" style={{fontSize:'75%'}}>strap</a></li>
              </ul>
              <div className="actions">
                <a href="https://livedemo00.template-help.com/magento_55583/tag/list/">View All Tags</a>
              </div>
            </div>
          </div>

          <div className="block block-poll">
            <div className="block-title">
              <strong><span>Community Poll</span></strong>
            </div>
            <form id="pollForm" action="https://livedemo00.template-help.com/magento_55583/poll/vote/add/poll_id/1/" method="post" onSubmit={()=>{return this.validatePollAnswerIsSelected();}}>
              <div className="block-content">
                <p className="block-subtitle">What is the main reason for you to purchase products online?</p>
                <ul id="poll-answers">
                  <li className="odd">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_1" value="1"/>
                    <span className="label"><label htmlFor="vote_1">More convenient shipping and delivery</label></span>
                  </li>
                  <li className="even">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_2" value="2"/>
                    <span className="label"><label htmlFor="vote_2">Lower price</label></span>
                  </li>
                  <li className="odd">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_3" value="3"/>
                    <span className="label"><label htmlFor="vote_3">Bigger choice</label></span>
                  </li>
                  <li className="even">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_4" value="4"/>
                    <span className="label"><label htmlFor="vote_4">Centralized product search procedure (without having to leave your home)</label></span>
                  </li>
                  <li className="odd">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_5" value="5"/>
                    <span className="label"><label htmlFor="vote_5">Payments security</label></span>
                  </li>
                  <li className="even">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_6" value="6"/>
                    <span className="label"><label htmlFor="vote_6">30-day Money Back Guarantee30-day Money Back Guarantee</label></span>
                  </li>
                  <li className="last odd">
                    <input type="radio" name="vote" className="radio poll_vote" id="vote_7" value="7"/>
                    <span className="label"><label htmlFor="vote_7">Other.</label></span>
                  </li>
                </ul>
                <div className="actions">
                  <button type="submit" title="Vote" className="button"><span><span>Vote</span></span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarLeft;
