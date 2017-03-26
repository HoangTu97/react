function disable_scroll() {
  jQuery('body').bind('touchmove', function(e){e.preventDefault()});
}

function enable_scroll() {
  jQuery('body').unbind('touchmove');
}
