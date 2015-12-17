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

  #单选投票
  $(".dt-vote .single-selection").on('click', '.dt-vote-list', ()->
    $(this).toggleClass("thisOver")
    $(this).siblings('.dt-vote-list').removeClass('thisOver');
  );
  #多选投票
  $(".dt-vote .MultiSelect").on('click', '.dt-vote-list', ()->
    $(this).toggleClass("thisOver")
  );

