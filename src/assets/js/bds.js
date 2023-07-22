jQuery(document).ready(function () {
  jQuery("img.lazy").lazyload();
  jQuery('#rating').barrating({
      theme: 'fontawesome-stars'
  });
});