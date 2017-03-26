import React , { Component } from 'react';

class Account extends Component {
  render() {
    return (
      <div>
        <div className="skip-links2"> <span className="skip-link2 skip-account2"></span></div>
        <div id="header-account2" className="skip-content2">
          <div style={{display: 'none'}} className="youama-login-window">
            <div className="youama-window-outside">
              <span className="close">×</span>
              <div className="youama-window-inside">
                <div className="youama-window-title">
                  <h3> Login Form </h3>
                </div>
                <div className="account-login">
                  <script type="text/javascript">
                  {`//<![CDATA[
                    var dataForm = new VarienForm('login-form', true);
                  //]]>`}
                  </script>
                </div>
                <div className="youama-window-box first">
                  <div className="youama-window-content">
                    <div className="input-fly youama-showhideme input-email">
                      <label>E-mail address <span>*</span></label>
                      <input placeholder="E-mail address" className="youama-email" name="youama-email" type="text"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-email err-noemail err-wrongemail err-wronglogin"></div>
                    </div>
                    <div className="input-fly youama-showhideme input-password">
                      <label>Password <span>*</span></label>
                      <input placeholder="Password" className="youama-password" name="youama-password" value="" type="password"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-password err-dirtypassword err-nopassword err-longpassword"></div>
                    </div>
                  </div>
                </div>
                <div className="youama-window-box last">
                  <div className="youama-window-content box-contents box-contents-button youama-showhideme">
                    <span className="youama-forgot-password">
                      <a href="https://livedemo00.template-help.com/magento_55583/customer/account/forgotpassword/">Forgot Password ?</a>
                    </span>
                    <button type="button" className="button btn-login btn-proceed-checkout btn-checkout youama-ajaxlogin-button">
                      <span><span> Login </span></span>
                    </button>
                    <p id="y-to-register" className="yoauam-switch-window">or registration </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: 'none'}} className="youama-register-window">
            <div className="youama-window-outside">
              <span className="close">×</span>
              <div className="youama-window-inside">
                <div className="youama-window-title">
                  <h3> Registration </h3>
                </div>
                <div className="youama-window-box first">
                  <div className="youama-window-subtitle youama-showhideme">
                    <p>Profile Informations</p>
                  </div>
                  <div className="youama-window-content">
                    <div className="input-fly youama-showhideme input-firstname">
                      <label htmlFor="youama-firstname">First Name <span>*</span></label>
                      <input placeholder="First Name" id="youama-firstname" name="youama-firstname" type="text"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-firstname err-nofirstname err-dirtyfirstname"></div>
                    </div>
                    <div className="input-fly youama-showhideme input-lastname">
                      <label htmlFor="youama-lastname">Last Name <span>*</span></label>
                      <input placeholder="Last Name" id="youama-lastname" name="youama-lastname" type="text"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-lastname err-nolastname err-dirtylastname"></div>
                    </div>
                    <div className="input-fly input-fly-checkbox youama-showhideme">
                      <input id="youama-newsletter" name="youama-newsletter" value="ok" type="checkbox"/>
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
                      <input placeholder="E-mail address" className="youama-email" name="youama-email" type="text"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-email err-noemail err-wrongemail err-emailisexist"></div>
                    </div>
                    <div className="input-fly youama-showhideme input-password">
                      <label>Password <span>*</span></label>
                      <input placeholder="Password" className="youama-password" name="youama-password" value="" type="password"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-password err-dirtypassword err-nopassword err-shortpassword err-longpassword"></div>
                    </div>
                    <div className="input-fly youama-showhideme input-passwordsecond">
                      <label htmlFor="youama-passwordsecond">Password confirmation <span>*</span></label>
                      <input placeholder="Password confirmation" id="youama-passwordsecond" name="youama-passwordsecond" value="" type="password"/>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-passwordsecond err-nopasswordsecond err-notsamepasswords"></div>
                    </div>
                    <div className="input-fly input-fly-checkbox youama-showhideme">
                      <input id="youama-licence" name="youama-licence" value="ok" type="checkbox"/>
                      <label htmlFor="youama-licence">I accept the <a href="https://livedemo00.template-help.com/magento_55583/privacy-policy-cookie-restriction-mode/" target="_blank">Terms and Coditions</a></label>
                      <div style={{display: 'none'}} className="youama-ajaxlogin-error err-nolicence"></div>
                    </div>
                  </div>
                </div>
                <div className="youama-window-box last">
                  <div className="youama-window-content box-contents youama-showhideme">
                    <button type="button" className="button btn-reg btn-proceed-checkout btn-checkout youama-ajaxlogin-button">
                      <span><span> Register </span></span>
                    </button>
                    <p id="y-to-login" className="yoauam-switch-window">or login </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="youama-ajaxlogin-loader"></div>
          <div className="youama-confirmmsg-window" style={{display:'none'}}>
            <div className="youama-window-outside">
              <span className="close">×</span><br/>
              <div className="alert alert-success">Account confirmation is required. Please, check your email for the confirmation link.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
