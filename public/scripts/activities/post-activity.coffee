require 'bootstrap'
tags = require '../partials/tags'
editor = require '../partials/editor/umEditor'
upload = require '../functions/uploadifive'
datePicker = require '../functions/datetimepicker.coffee'

$ ->

  # 初始化编辑器
  editor.init()

  # 初始化标签
  tags.init('myTag')

  # 初始化图片上传
  upload.init({
    file: 'file_upload',
    preview: 'coverPreview',
    style: 'cover'
    done: (ret)-> $('#cover').val ret.key
  })

  # 初始化日期范围控件
  datePicker.timeRange()

  $('.delete').click(
    ()-> $(this).closest(".form-group").remove()
  );

