$ = require 'jquery/dist/jquery'
bst = require 'bootstrap/dist/js/bootstrap';

$ ->
  $('.weixin').hover(
    ()-> $(this).closest(".div-shadow").find('.ewm').addClass("show")
  , ()-> $(this).closest(".div-shadow").find('.ewm').removeClass("show")
  );


