$ = require 'jquery/dist/jquery'
bst = require 'bootstrap/dist/js/bootstrap'

module.exports.init = (editor)->
  $('.colorpick').on 'click', 'li', ()->
    colorValue = $(this).css('background-color')
    console.log colorValue


