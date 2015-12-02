$ = require 'jquery/dist/jquery'


module.exports.init = () ->
  $tagList = $('#partial-tags')
  $tagList.on 'click', 'li', ()->
    if $(this).siblings('.active').length < 5 or $(this).hasClass('active')
      $(this).toggleClass("active")

  $.get('/api/tags').then (tags) ->
    tagElements = ("<li id='#{tag.id}'>#{tag.name}</li>" for tag in tags)
    $tagList.html(tagElements.join(''))
