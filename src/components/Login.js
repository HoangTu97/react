import React , { Component } from 'react';

import AjaxLoginError from './blocks/Ajax-login-error';

class Login extends Component {
  componentDidMount() {
    var dataForm = new VarienForm('login-form', true);

    function toggleRememberMePopup() {
      var formParent = jQuery(this).parents('form:first');
      formParent.find('.remember-me-box a').toggleClass('hide');
      formParent.find('.remember-me-popup').toggleClass('show');
      return false;
    }
    var rememberMeToggleSetup = false;
    jQuery(document).ready(function(){
      if (!rememberMeToggleSetup) {
        jQuery('.remember-me-box a, .remember-me-popup a').on('click', toggleRememberMePopup);
        rememberMeToggleSetup = true;
      }
    });
  }

  render() {
    return (
    <div className="main-container col1-layout">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="main">
              <div className="col-main">
                <div className="padding-s">
                  <div className="youama-ajaxlogin-loader">
                  </div>
                  <div className="youama-login-window">
                    <div className="youama-window-outside">
                      <span className="close">×</span>
                      <div className="youama-window-inside">
                        <div className="youama-window-title">
                          <h3>
                            Login Form
                          </h3>
                        </div>
                        <div className="account-login">
                        </div>
                        <div className="youama-window-box first">
                          <div className="youama-window-content">
                            <div className="input-fly youama-showhideme input-email">
                              <label>E-mail address <span>*</span></label>
                              <input type="text" placeholder="E-mail address" className="youama-email" name="youama-email" value=""/>
                              <div className="youama-ajaxlogin-error err-email err-noemail err-wrongemail err-wronglogin"></div>
                            </div>
                            <div className="input-fly youama-showhideme input-password">
                              <label>Password <span>*</span></label>
                              <input type="password" placeholder="Password" className="youama-password" name="youama-password" value=""/>
                              <div className="youama-ajaxlogin-error err-password err-dirtypassword err-nopassword err-longpassword"></div>
                            </div>
                          </div>
                        </div>
                        <div className="youama-window-box last">
                          <div className="youama-window-content box-contents box-contents-button youama-showhideme">
                            <span className="youama-forgot-password">
                              <a href="http://livedemo00.template-help.com/magento_55583/customer/account/forgotpassword/">Forgot Password ?</a>
                            </span>
                            <button type="button" className="button btn-login btn-proceed-checkout btn-checkout youama-ajaxlogin-button">
                              <span>
                                <span>
                                  Login
                                </span>
                              </span>
                            </button>
                            <p id="y-to-register" className="yoauam-switch-window">
                              or registration
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="youama-register-window">
                    <div className="youama-window-outside">
                      <span className="close">×</span>
                      <div className="youama-window-inside">
                        <div className="youama-window-title">
                          <h3>
                            Registration
                          </h3>
                        </div>
                        <div className="youama-window-box first">
                          <div className="youama-window-subtitle youama-showhideme">
                            <p>Profile Informations</p>
                          </div>
                          <div className="youama-window-content">
                            <div className="input-fly youama-showhideme input-firstname">
                              <label htmlFor="youama-firstname">First Name <span>*</span></label>
                              <input type="text" placeholder="First Name" id="youama-firstname" name="youama-firstname" value=""/>
                              <div className="youama-ajaxlogin-error err-firstname err-nofirstname err-dirtyfirstname"></div>
                            </div>
                            <div className="input-fly youama-showhideme input-lastname">
                              <label htmlFor="youama-lastname">Last Name <span>*</span></label>
                              <input type="text" placeholder="Last Name" id="youama-lastname" name="youama-lastname" value=""/>
                              <div className="youama-ajaxlogin-error err-lastname err-nolastname err-dirtylastname"></div>
                            </div>
                            <div className="input-fly input-fly-checkbox youama-showhideme">
                              <input type="checkbox" id="youama-newsletter" name="youama-newsletter" value="ok"/>
                              <label htmlFor="youama-newsletter">Subscribe to Newsletter</label>
                            </div>
                          </div>
                        </div>
                        <div className="youama-window-box second">
                          <div className="youama-window-subtitle youama-showhideme">
                            <p>Login Datas</p>
                          </div>
                          <div className="youama-window-content">
                            <div className="input-fly youama-showhideme input-email">
                              <label>E-mail address <span>*</span></label>
                              <input type="text" placeholder="E-mail address" className="youama-email" name="youama-email" value=""/>
                              <div className="youama-ajaxlogin-error err-email err-noemail err-wrongemail err-emailisexist"></div>
                            </div>
                            <div className="input-fly youama-showhideme input-password">
                              <label>Password <span>*</span></label>
                              <input type="password" placeholder="Password" className="youama-password" name="youama-password" value=""/>
                              <div className="youama-ajaxlogin-error err-password err-dirtypassword err-nopassword err-shortpassword err-longpassword"></div>
                            </div>
                            <div className="input-fly youama-showhideme input-passwordsecond">
                              <label htmlFor="youama-passwordsecond">Password confirmation <span>*</span></label>
                              <input type="password" placeholder="Password confirmation" id="youama-passwordsecond" name="youama-passwordsecond" value=""/>
                              <div className="youama-ajaxlogin-error err-passwordsecond err-nopasswordsecond err-notsamepasswords"></div>
                            </div>
                            <div className="input-fly input-fly-checkbox youama-showhideme">
                              <input type="checkbox" id="youama-licence" name="youama-licence" value="ok"/>
                              <label htmlFor="youama-licence">I accept the <a href="http://livedemo00.template-help.com/magento_55583/privacy-policy-cookie-restriction-mode/" target="_blank">Terms and Coditions</a></label>
                              <div className="youama-ajaxlogin-error err-nolicence"></div>
                            </div>
                          </div>
                        </div>
                        <div className="youama-window-box last">
                          <div className="youama-window-content box-contents youama-showhideme">
                            <button type="button" className="button btn-reg btn-proceed-checkout btn-checkout youama-ajaxlogin-button">
                              <span>
                                <span>
                                  Register
                                </span>
                              </span>
                            </button>
                            <p id="y-to-login" className="yoauam-switch-window">
                              or login
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="youama-confirmmsg-window" style={{display:'none'}}>
                    <div className="youama-window-outside">
                      <span className="close">×</span><br/>
                      <div className="alert alert-success">Account confirmation is required. Please, check your email for the confirmation link.</div>
                    </div>
                  </div>

                  <AjaxLoginError/>

                  <div className="account-login">
                    <div className="page-title">
                      <h1> Login or Create an Account </h1>
                    </div>
                    <form action="http://livedemo00.template-help.com/magento_55583/customer/account/loginPost/" method="post" id="login-form" className="scaffold-form">
                      <input name="form_key" type="hidden" value="Ie1FWWTXJPr6WMNS"/>
                      <div className="row">
                        <div className="col-1 new-users col-xs-12 col-sm-6">
                          <div className="theme-block">
                            <div className="content">
                              <h2>New Here?</h2>
                              <p className="form-instructions">Registration is free and easy!</p>
                              <ul className="benefits">
                                <li>Faster checkout</li>
                                <li>Save multiple shipping addresses</li>
                                <li>View and track orders and more</li>
                              </ul>
                            </div>
                            <div className="buttons-set">
                              <a title="Create an Account" className="button" href="http://livedemo00.template-help.com/magento_55583/customer/account/create/"><span><span>Create an Account</span></span></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 registered-users col-xs-12 col-sm-6">
                          <div className="theme-block">
                            <div className="content fieldset">
                              <h2>Already registered?</h2>
                              <p className="form-instructions">If you have an account with us, please log in.</p>
                              <p className="required">* Required Fields</p>
                              <ul className="form-list">
                                <li>
                                  <label htmlFor="email" className="required"><em>*</em>Email Address</label>
                                  <div className="input-box">
                                    <input type="email" autoCapitalize="off" autoCorrect="off" spellCheck="false" name="login[username]" value="" id="email" className="input-text required-entry validate-email" title="Email Address"/>
                                  </div>
                                </li>
                                <li>
                                  <label htmlFor="pass" className="required"><em>*</em>Password</label>
                                  <div className="input-box">
                                    <input type="password" name="login[password]" className="input-text required-entry validate-password" id="pass" title="Password"/>
                                  </div>
                                </li>
                              </ul>
                              <div className="remember-me-popup">
                                <div className="remember-me-popup-head">
                                  <h3>What{"'"}s this?</h3>
                                  <a href="#" className="remember-me-popup-close" title="Close">Close</a>
                                </div>
                                <div className="remember-me-popup-body">
                                  <p>Checking &quot;Remember Me&quot; will let you access your shopping cart on this computer when you are logged out</p>
                                  <div className="remember-me-popup-close-button a-right">
                                    <a href="#" className="remember-me-popup-close button" title="Close"><span>Close</span></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="buttons-set">
                              <button type="submit" className="button" title="Login" name="send" id="send2"><span><span>Login</span></span></button>
                              <a href="http://livedemo00.template-help.com/magento_55583/customer/account/forgotpassword/" className="f-left">Forgot Your Password?</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
