$ = require 'jquery/dist/jquery'
bst = require 'bootstrap/dist/js/bootstrap'


module.exports.init = (editor)->
  $.get('/api/componentGroups').then (groups)->
    console.log groups


  $('.colorpick').on 'click', 'li', ()->
    colorValue = $(this).css('background-color')
    $(this).closest(".dropdown").find('.bg-color').css('background-color',colorValue)



