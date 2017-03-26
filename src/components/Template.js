import React, { Component } from 'react';

import NoScript from './blocks/NoScript';
import Account from './blocks/Account';
import Header from './blocks/Header';
import Footer from './blocks/Footer';


class Template extends Component {

  componentDidMount() {

    window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){f[z]=function(){(a.s=a.s||[]).push(arguments)};var a=f[z]._={},q=c.methods.length;while(q--){(function(n){f[z][n]=function(){f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={0:+new Date};a.P=function(u){a.p[u]=new Date-a.p[0]};function s(){a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{b.contentWindow[g].open()}catch(w){c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{var t=b.contentWindow[g];t.write(p());t.close()}catch(x){b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
    loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});


    olark.extend("CartSaver");
    olark.configure("CartSaver.version", "Magento@1.0.9");
    olark.configure("CartSaver.customer", {"name":" ","email":null,"billing_address":false,"shipping_address":false});
    olark.configure("CartSaver.items", []);
    olark.configure("CartSaver.magento", {"total":null,"formatted_total":"$0.00","extra_items":[{"name":"subtotal","price":null,"formatted_price":"$0.00"},{"name":"grand_total","price":null,"formatted_price":"$0.00"}],"recent_events":null});

    olark.identify("7830-582-10-3714");
  }

  render() {
    return (
      <div>
        <div id="olark" style={{ display: 'none' }}>
          <olark>
            <iframe id="olark-loader" frameBorder="0"></iframe>
          </olark>
        </div>
        <div className="wrapper ps-static en-lang-class">
          {/* NoScript */}
          <NoScript />

          <div className="page">

            {/* Account */}
            <Account />

            {/* Header */}
            <Header />

            {/* Content */}
            {this.props.children}

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
