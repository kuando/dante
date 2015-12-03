require '../../css/uploadifive.css'
upload = require '../functions/uploadifive'

$ ->
  upload.init({
    file: 'file-upload',
    done: (ret)-> $('#cover').val ret.key
  })

  $('.btn-remove').click ()->
    $.ajax({
      url: "/api/activityThemes/" + $(this).attr('id'),
      method: 'DELETE'
    }).then ()->
      alert('删除成功')
