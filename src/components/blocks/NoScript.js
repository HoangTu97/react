import React , { Component } from 'react';

class NoScript extends Component {
  render() {
    return (
      <noscript>
        <div className="global-site-notice noscript">
          <div className="notice-inner">
            <p><strong>JavaScript seems to be disabled in your browser.</strong><br/>
              You must have JavaScript enabled in your browser to utilize the functionality of this website.
            </p>
          </div>
        </div>
      </noscript>
    );
  }
}

export default NoScript;
