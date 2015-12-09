require 'bootstrap'
require 'jquery-form'
tags = require '../partials/tags'
editor = require '../partials/editor/umEditor'
cover = require '../partials/cover'
enroll = require('../partials/enroll')
vote = require('../partials/vote')

datePicker = require '../functions/datetimepicker.coffee'

$ ->

# 初始化
  editor = editor.init()
  tags.init()
  enroll.init()
  cover.init()
  vote.init()

  # 初始化日期范围控件
  datePicker.timeRange()

  $('.preview-btn').click ()->
#    $("#activityForm").find("input[name='item.content']").val(editor.getContent())
    activity = $('#currentActivity').val()
    if not activity
      return alert ''

    $('#activityForm').ajaxSubmit(
      beforeSubmit: (arr, $form, options)->
        console.log arr
      dataType: 'json'
      type: 'PUT'
      url: "/api/activities/#{activity}/preview"
      error: (err)->
        console.log err
      success: (res)->
        console.log res
    )




