$ = require 'jquery/dist/jquery'

$('#partial-tags').on 'click', 'li', ()->
  if $(this).siblings('.active').length < 5 or $(this).hasClass('active')
    $(this).toggleClass("active")

module.exports.init = (tagGroup) ->
  console.log tagGroup