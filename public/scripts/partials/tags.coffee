module.exports.init = () ->
  $tagList = $('#partial-tags')
  $tagList.on 'click', 'li', (event)->
    if $(this).siblings('.active').length < 5 or $(this).hasClass('active')
      $(this).addClass("active")
      $(this).clone().appendTo(".activities-label-list")
      event.stopPropagation()
    else alert(11111111111)

#  $.get('/api/tags').then (tags) ->
#    tagElements = ("<li id='#{tag.id}'>#{tag.name}</li>" for tag in tags)
#    $tagList.html(tagElements.join(''))
