require 'bootstrap'
tags = require '../partials/tags'
editor = require '../partials/editor/umEditor'
cover = require '../partials/cover'
enroll = require('../partials/enroll')
vote = require('../partials/vote')

datePicker = require '../functions/datetimepicker.coffee'

$ ->

# 初始化
  editor.init()
  tags.init()
  enroll.init()
  cover.init()
  vote.init()

  # 初始化日期范围控件
  datePicker.timeRange()

  $('.delete').click(
    ()-> $(this).closest(".form-group").remove()
  );


