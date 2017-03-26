var bp={xsmall:479,small:599,medium:767,large:991,xlarge:1199}
Varien.searchForm.prototype.initialize=function(form,field,emptyText){this.form=$(form);this.field=$(field);this.emptyText=emptyText;Event.observe(this.form,'submit',this.submit.bind(this));Event.observe(this.field,'change',this.change.bind(this));Event.observe(this.field,'focus',this.focus.bind(this));Event.observe(this.field,'blur',this.blur.bind(this));this.blur();}
Varien.searchForm.prototype.submit=function(event){if(this.field.value==this.emptyText||this.field.value==''){Event.stop(event);this.field.addClassName('validation-failed');this.field.focus();return false;}
return true;}
Varien.searchForm.prototype.change=function(event){if(this.field.value!=this.emptyText&&this.field.value!=''&&this.field.hasClassName('validation-failed')){this.field.removeClassName('validation-failed');}}
Varien.searchForm.prototype.blur=function(event){if(this.field.hasClassName('validation-failed')){this.field.removeClassName('validation-failed');}}
var PointerManager={MOUSE_POINTER_TYPE:'mouse',TOUCH_POINTER_TYPE:'touch',POINTER_EVENT_TIMEOUT_MS:500,standardTouch:false,touchDetectionEvent:null,lastTouchType:null,pointerTimeout:null,pointerEventLock:false,getPointerEventsSupported:function(){return this.standardTouch;},getPointerEventsInputTypes:function(){if(window.navigator.pointerEnabled){return{MOUSE:'mouse',TOUCH:'touch',PEN:'pen'};}else if(window.navigator.msPointerEnabled){return{MOUSE:0x00000004,TOUCH:0x00000002,PEN:0x00000003};}else{return{};}},getPointer:function(){if(Modernizr.ios){return this.TOUCH_POINTER_TYPE;}
if(this.lastTouchType){return this.lastTouchType;}
return Modernizr.touch?this.TOUCH_POINTER_TYPE:this.MOUSE_POINTER_TYPE;},setPointerEventLock:function(){this.pointerEventLock=true;},clearPointerEventLock:function(){this.pointerEventLock=false;},setPointerEventLockTimeout:function(){var that=this;if(this.pointerTimeout){clearTimeout(this.pointerTimeout);}
this.setPointerEventLock();this.pointerTimeout=setTimeout(function(){that.clearPointerEventLock();},this.POINTER_EVENT_TIMEOUT_MS);},triggerMouseEvent:function(originalEvent){if(this.lastTouchType==this.MOUSE_POINTER_TYPE){return;}
this.lastTouchType=this.MOUSE_POINTER_TYPE;$j(window).trigger('mouse-detected',originalEvent);},triggerTouchEvent:function(originalEvent){if(this.lastTouchType==this.TOUCH_POINTER_TYPE){return;}
this.lastTouchType=this.TOUCH_POINTER_TYPE;$j(window).trigger('touch-detected',originalEvent);},initEnv:function(){if(window.navigator.pointerEnabled){this.standardTouch=true;this.touchDetectionEvent='pointermove';}else if(window.navigator.msPointerEnabled){this.standardTouch=true;this.touchDetectionEvent='MSPointerMove';}else{this.touchDetectionEvent='touchstart';}},wirePointerDetection:function(){var that=this;if(this.standardTouch){$j(window).on(this.touchDetectionEvent,function(e){switch(e.originalEvent.pointerType){case that.getPointerEventsInputTypes().MOUSE:that.triggerMouseEvent(e);break;case that.getPointerEventsInputTypes().TOUCH:case that.getPointerEventsInputTypes().PEN:that.triggerTouchEvent(e);break;}});}else{$j(window).on(this.touchDetectionEvent,function(e){if(that.pointerEventLock){return;}
that.setPointerEventLockTimeout();that.triggerTouchEvent(e);});$j(document).on('mouseover',function(e){if(that.pointerEventLock){return;}
that.setPointerEventLockTimeout();that.triggerMouseEvent(e);});}},init:function(){this.initEnv();this.wirePointerDetection();}};var MenuManager={mouseEnterEventObserved:false,touchEventOrderIncorrect:false,cancelNextTouch:false,TouchScroll:{TOUCH_SCROLL_THRESHOLD:20,touchStartPosition:null,reset:function(){this.touchStartPosition=$j(window).scrollTop();},shouldCancelTouch:function(){if(this.touchStartPosition==null){return false;}
var scroll=$j(window).scrollTop()- this.touchStartPosition;return Math.abs(scroll)>this.TOUCH_SCROLL_THRESHOLD;}},useSmallScreenBehavior:function(){return Modernizr.mq("screen and (max-width:"+ bp.large+"px)");},toggleMenuVisibility:function(target){var link=$j(target);var li=link.closest('li');if(!this.useSmallScreenBehavior()){li.siblings().removeClass('menu-active').find('li').removeClass('menu-active');li.find('li.menu-active').removeClass('menu-active');}
li.toggleClass('menu-active');},init:function(){this.wirePointerEvents();},wirePointerEvents:function(){var that=this;var pointerTarget=$j('#nav a.has-children');var hoverTarget=$j('#nav li');if(PointerManager.getPointerEventsSupported()){var enterEvent=window.navigator.pointerEnabled?'pointerenter':'mouseenter';var leaveEvent=window.navigator.pointerEnabled?'pointerleave':'mouseleave';var fullPointerSupport=window.navigator.pointerEnabled;hoverTarget.on(enterEvent,function(e){if(e.originalEvent.pointerType===undefined||e.originalEvent.pointerType==PointerManager.getPointerEventsInputTypes().MOUSE){if(fullPointerSupport){that.mouseEnterAction(e,this);}else{that.PartialPointerEventsSupport.mouseEnterAction(e,this);}}}).on(leaveEvent,function(e){if(e.originalEvent.pointerType===undefined||e.originalEvent.pointerType==PointerManager.getPointerEventsInputTypes().MOUSE){if(fullPointerSupport){that.mouseLeaveAction(e,this);}else{that.PartialPointerEventsSupport.mouseLeaveAction(e,this);}}});if(!fullPointerSupport){pointerTarget.on('MSPointerDown',function(e){$j(this).data('pointer-type',e.originalEvent.pointerType);});}
pointerTarget.on('click',function(e){var pointerType=fullPointerSupport?e.originalEvent.pointerType:$j(this).data('pointer-type');if(pointerType===undefined||pointerType==PointerManager.getPointerEventsInputTypes().MOUSE){that.mouseClickAction(e,this);}else{if(fullPointerSupport){that.touchAction(e,this);}else{that.PartialPointerEventsSupport.touchAction(e,this);}}
$j(this).removeData('pointer-type');});}else{hoverTarget.on('mouseenter',function(e){that.mouseEnterEventObserved=true;that.cancelNextTouch=true;that.mouseEnterAction(e,this);}).on('mouseleave',function(e){that.mouseLeaveAction(e,this);});$j(window).on('touchstart',function(e){if(that.mouseEnterEventObserved){that.touchEventOrderIncorrect=true;that.mouseEnterEventObserved=false;}
that.TouchScroll.reset();});pointerTarget.on('touchend',function(e){$j(this).data('was-touch',true);e.preventDefault();if(that.TouchScroll.shouldCancelTouch()){return;}
if(that.touchEventOrderIncorrect){that.PartialTouchEventsSupport.touchAction(e,this);}else{that.touchAction(e,this);}}).on('click',function(e){if($j(this).data('was-touch')){e.preventDefault();return;}
that.mouseClickAction(e,this);});}},PartialPointerEventsSupport:{mouseleaveLock:0,mouseEnterAction:function(event,target){if(MenuManager.useSmallScreenBehavior()){MenuManager.mouseEnterAction(event,target);return;}
event.stopPropagation();var jtarget=$j(target);if(!jtarget.hasClass('level0')){this.mouseleaveLock=jtarget.parents('li').length+ 1;}
MenuManager.toggleMenuVisibility(target);},mouseLeaveAction:function(event,target){if(MenuManager.useSmallScreenBehavior()){MenuManager.mouseLeaveAction(event,target);return;}
if(this.mouseleaveLock>0){this.mouseleaveLock--;return;}
$j(target).removeClass('menu-active');},touchAction:function(event,target){if(MenuManager.useSmallScreenBehavior()){MenuManager.touchAction(event,target);return;}
event.preventDefault();this.mouseleaveLock++;}},PartialTouchEventsSupport:{touchAction:function(event,target){if(MenuManager.cancelNextTouch){MenuManager.cancelNextTouch=false;return;}
MenuManager.toggleMenuVisibility(target);}},mouseEnterAction:function(event,target){if(this.useSmallScreenBehavior()){return;}
$j(target).addClass('menu-active');},mouseLeaveAction:function(event,target){if(this.useSmallScreenBehavior()){return;}
$j(target).removeClass('menu-active');},mouseClickAction:function(event,target){if(this.useSmallScreenBehavior()){event.preventDefault();this.toggleMenuVisibility(target);}},touchAction:function(event,target){this.toggleMenuVisibility(target);event.preventDefault();}};$j(document).ready(function(){var w=$j(window);var d=$j(document);var body=$j('body');Modernizr.addTest('ios',function(){return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);});PointerManager.init();$j(".change").click(function(e){$j(this).toggleClass('active');e.stopPropagation()});$j(document).click(function(e){if(!$j(e.target).hasClass('.change'))$j(".change").removeClass('active');});var skipContents=$j('.skip-content');var skipLinks=$j('.skip-link');var skipContentsNotMenu=$j('.skip-content:not(.nav-content)');skipLinks.on('click',function(e){e.preventDefault();var self=$j(this);var target=self.attr('data-target-element')?self.attr('data-target-element'):self.attr('href');var elem=$j(target);var isSkipContentOpen=elem.hasClass('skip-active')?1:0;skipLinks.removeClass('skip-active');skipContents.removeClass('skip-active');$j(".sf-menu-phone").hide();$j('.sf-menu-phone li.parent strong').removeClass();$j('ul','.sf-menu-phone li.parent').hide();if(isSkipContentOpen){self.removeClass('skip-active');}else{self.addClass('skip-active');elem.addClass('skip-active');}});$j('#header-cart, .header-minicart.mobile').on('click','.skip-link-close',function(e){var parent=$j(this).parents('.skip-content');var link=parent.siblings('.skip-link');parent.removeClass('skip-active');link.removeClass('skip-active');e.preventDefault();});MenuManager.init();function preventMenuSpill(){var windowWidth=$j(window).width();$j('ul.level0').each(function(){var ul=$j(this);ul.addClass('position-test');ul.removeClass('spill');var width=ul.outerWidth();var offset=ul.offset().left;ul.removeClass('position-test');if((offset+ width)>windowWidth){ul.addClass('spill');}});}
preventMenuSpill();$j(window).on('delayed-resize',preventMenuSpill);enquire.register('screen and (min-width: '+(bp.large+ 1)+'px)',{match:function(){$j('.menu-active').removeClass('menu-active');$j('.sub-menu-active').removeClass('sub-menu-active');$j('.skip-active').removeClass('skip-active');},unmatch:function(){$j('.menu-active').removeClass('menu-active');$j('.sub-menu-active').removeClass('sub-menu-active');$j('.skip-active').removeClass('skip-active');}});var mediaListLinks=$j('.media-list').find('a');var mediaPrimaryImage=$j('.primary-image').find('img');if(mediaListLinks.length){mediaListLinks.on('click',function(e){e.preventDefault();var self=$j(this);mediaPrimaryImage.attr('src',self.attr('href'));});}
jQuery.fn.toggleSingle=function(options){var settings=$j.extend({destruct:false},options);return this.each(function(){if(!settings.destruct){$j(this).on('click',function(){$j(this).toggleClass('active').next().toggleClass('no-display');});$j(this).next().addClass('no-display');}else{$j(this).off('click');$j(this).removeClass('active').next().removeClass('no-display');}});}
$j('.toggle-content').each(function(){var wrapper=jQuery(this);var hasTabs=wrapper.hasClass('tabs');var hasAccordion=wrapper.hasClass('accordion');var startOpen=wrapper.hasClass('open');var dl=wrapper.children('dl:first');var dts=dl.children('dt');var panes=dl.children('dd');var groups=new Array(dts,panes);if(hasTabs){var ul=jQuery('<ul class="toggle-tabs"></ul>');dts.each(function(){var dt=jQuery(this);var li=jQuery('<li></li>');li.html(dt.html());ul.append(li);});ul.insertBefore(dl);var lis=ul.children();groups.push(lis);}
var i;for(i=0;i<groups.length;i++){groups[i].filter(':last').addClass('last');}
function toggleClasses(clickedItem,group){var index=group.index(clickedItem);var i;for(i=0;i<groups.length;i++){groups[i].removeClass('current');groups[i].eq(index).addClass('current');}}
dts.on('click',function(e){if(jQuery(this).hasClass('current')&&wrapper.hasClass('accordion-open')){wrapper.removeClass('accordion-open');}else{wrapper.addClass('accordion-open');}
toggleClasses(jQuery(this),dts);});if(hasTabs){lis.on('click',function(e){toggleClasses(jQuery(this),lis);});lis.eq(0).trigger('click');}
if(startOpen){dts.eq(0).trigger('click');}});if($j('.col-left-first > .block').length&&$j('.category-products').length){enquire.register('screen and (max-width: '+ bp.medium+'px)',{match:function(){$j('.col-left-first').insertBefore($j('.category-products'))},unmatch:function(){$j('.col-left-first').insertBefore($j('.main-col-left').length?$j('.main-col-left'):$j('.main-col-right'))}});}
enquire.register('(max-width: '+ bp.medium+'px)',{setup:function(){this.toggleElements=$j('.sidebar .main-col-left .block .block-title, '+'.sidebar .main-col-right .block .block-title, '+'.col-left-first .block-subtitle--filter, '+'.footer .footer-col h4, '+'.footer .block .block-title ');},match:function(){this.toggleElements.toggleSingle();},unmatch:function(){this.toggleElements.toggleSingle({destruct:true});}});if($j('body.checkout-onepage-index').length){enquire.register('(max-width: '+ bp.medium+'px)',{match:function(){$j('#checkout-step-review').prepend($j('#checkout-progress-wrapper'));},unmatch:function(){$j('.col-right').prepend($j('#checkout-progress-wrapper'));}});}
if($j('body.checkout-cart-index').length){$j('input[name^="cart"]').focus(function(){$j(this).siblings('button').fadeIn();});}
if($j('.a-left').length){enquire.register('(max-width: '+ bp.large+'px)',{match:function(){$j('.gift-info').each(function(){$j(this).next('td').children('textarea').appendTo(this).children();})},unmatch:function(){$j('.left-note').each(function(){$j(this).prev('td').children('textarea').appendTo(this).children();})}});}
if($j('.products-grid').length){var alignProductGridActions=function(){$j('.products-grid').each(function(){var gridRows=[];var tempRow=[];productGridElements=$j(this).children('li');productGridElements.each(function(index){if($j(this).css('clear')!='none'&&index!=0){gridRows.push(tempRow);tempRow=[];}
tempRow.push(this);if(productGridElements.length==index+ 1){gridRows.push(tempRow);}});});}
alignProductGridActions();$j(window).on('delayed-resize',function(e,resizeEvent){alignProductGridActions();});}
var resizeTimer;$j(window).resize(function(e){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){$j(window).trigger('delayed-resize',e);},250);});});var zoomSettings={zoomType:"inner",cursor:"crosshair",easing:true,}
var ProductMediaManager={IMAGE_ZOOM_THRESHOLD:20,imageWrapper:null,destroyZoom:function(){$j('.zoomContainer').remove();$j('.product-image-gallery .gallery-image').removeData('elevateZoom');},createZoom:function(image){ProductMediaManager.destroyZoom();if(PointerManager.getPointer()==PointerManager.TOUCH_POINTER_TYPE||Modernizr.mq("screen and (max-width:"+ bp.medium+"px)")){return;}
if(image.length<=0){return;}
if(image[0].naturalWidth&&image[0].naturalHeight){ProductMediaManager.destroyZoom();var widthDiff=image[0].naturalWidth- image.width()- ProductMediaManager.IMAGE_ZOOM_THRESHOLD;var heightDiff=image[0].naturalHeight- image.height()- ProductMediaManager.IMAGE_ZOOM_THRESHOLD;if(widthDiff<0&&heightDiff<0){image.parents('.product-image').removeClass('zoom-available');return;}else{image.parents('.product-image').addClass('zoom-available');}}
image.elevateZoom(zoomSettings);},swapImage:function(targetImage){targetImage=$j(targetImage);targetImage.addClass('gallery-image');ProductMediaManager.destroyZoom();var imageGallery=$j('.product-image-gallery');if(targetImage[0].complete){imageGallery.find('.gallery-image').removeClass('visible');imageGallery.append(targetImage);targetImage.addClass('visible');ProductMediaManager.createZoom(targetImage);}else{imageGallery.addClass('loading');imageGallery.append(targetImage);imagesLoaded(targetImage,function(){imageGallery.removeClass('loading');imageGallery.find('.gallery-image').removeClass('visible');targetImage.addClass('visible');ProductMediaManager.createZoom(targetImage);});}},wireThumbnails:function(){ProductMediaManager.getZoomImage($j('.product-image-thumbs .thumb-link'),'click');ProductMediaManager.getZoomImage($j('.gallery-top .swiper-slide'),'mouseover');},getZoomImage:function(selector,curr_event){$j(selector).on(curr_event,function(e){e.preventDefault();var jlink=$j(this);var target=$j('#image-'+ jlink.data('image-index'));ProductMediaManager.swapImage(target);})},initZoom:function(){ProductMediaManager.createZoom($j(".gallery-image.visible"));},init:function(){ProductMediaManager.imageWrapper=$j('.product-img-box');$j(window).on('delayed-resize',function(e,resizeEvent){ProductMediaManager.initZoom();});ProductMediaManager.initZoom();ProductMediaManager.wireThumbnails();$j(document).trigger('product-media-loaded',ProductMediaManager);}};$j(document).ready(function(){ProductMediaManager.init();});