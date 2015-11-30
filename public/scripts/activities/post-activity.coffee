$ = require 'jquery/dist/jquery'
bst = require 'bootstrap/dist/js/bootstrap'
tags = require '../partials/tags'
editor = require('../partials/umEditor')

$ ->
  editor.init('weixin') # 初始化编辑器,开启微信模式
  tags.init('myTag') # 初始化标签

  $('.delete').click(
    ()-> $(this).closest(".form-group").remove()
  );

  $("#enroll").on('click', '.addenroll',
    ()-> $(this).removeClass("addenroll").addClass("remove").html('<span class="glyphicon glyphicon-chevron-up f-green m-r-xs"></span>取消报名')
  );
  $("#enroll").on('click', '.remove',
    ()-> $(this).removeClass("remove").addClass("addenroll").html('<span class="glyphicon glyphicon-plus f-green m-r-xs"></span>添加报名')
  );

  $("#vote").on('click', '.addVote',
    ()-> $(this).removeClass("addVote").addClass("remove").html('<span class="glyphicon glyphicon-chevron-up f-green m-r-xs"></span>取消投票')
  );
  $("#vote").on('click', '.remove',
    ()-> $(this).removeClass("remove").addClass("addVote").html('<span class="glyphicon glyphicon-plus f-green m-r-xs"></span>添加投票')
  );