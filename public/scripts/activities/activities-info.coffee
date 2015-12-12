$ = require 'jquery/dist/jquery'
require 'bootstrap-notify/bootstrap-notify'

$ ->
  #收藏
  $("#share").on('click', '.favorite-btn',
    ()-> $(this).removeClass("star-false").addClass("star-true")
  );
  $("#share").on('click', '.star-true',
    ()-> $(this).removeClass("star-true").addClass("star-false")
  );

