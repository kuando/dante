require '../../css/uploadifive.css'
upload = require '../functions/uploadifive'

$ ->
  upload.init({
    file: 'file-upload',
    done: (ret)-> $('#cover').val ret.key
  })
