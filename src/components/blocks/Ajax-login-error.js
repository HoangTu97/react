import React , { Component } from 'react';

class AjaxLoginError extends Component {

  componentDidMount() {
    jQuery(window).load(function(){
      jQuery().youamaAjaxLogin({
        redirection : '0',
        profileUrl : 'https://livedemo00.template-help.com/magento_55583/customer/account/',
        autoShowUp : 'no',
        controllerUrl : 'https://livedemo00.template-help.com/magento_55583/ajaxlogin/ajax/index/'
      });
    });
  }

  render() {
    return (
      <div className="youama_ajaxlogin-temp-error" style={{display:'none !important'}}>
        <div className="ytmpa-nofirstname">First name is required!</div>
        <div className="ytmpa-nolastname">Last name is required!</div>
        <div className="ytmpa-dirtyfirstname">First name is not valid!</div>
        <div className="ytmpa-dirtylastname">Last name is not valid!</div>
        <div className="ytmpa-wrongemail">This is not an email address!</div>
        <div className="ytmpa-noemail">Email address is required!</div>
        <div className="ytmpa-emailisexist">This email is already registered!</div>
        <div className="ytmpa-nopassword">Password is required!</div>
        <div className="ytmpa-dirtypassword">Enter a valid password!</div>
        <div className="ytmpa-shortpassword">Please enter 6 or more characters!</div>
        <div className="ytmpa-longpassword">Please enter 16 or less characters!</div>
        <div className="ytmpa-notsamepasswords">Passwords are not same!</div>
        <div className="ytmpa-nolicence">Terms and Conditions are required!</div>
        <div className="ytmpa-wronglogin">Email or Password is wrong!</div>
      </div>
    );
  }
}

export default AjaxLoginError;
