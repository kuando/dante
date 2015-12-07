upload = require '../functions/uploadifive'

# 初始化图片上传
module.exports.init = ()->
  upload.init(
    file: 'file_upload'
    preview: 'coverPreview'
    style: 'cover'
    done: (ret)-> $('#cover').val ret.key
  )
