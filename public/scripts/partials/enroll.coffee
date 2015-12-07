#添加报名
module.exports.init = ()->
  $("#enroll").on('click', '.addenroll',
    ()-> $(this).html('<button class="btn btn-default m-r-xs">保存</button><button class="btn btn-white">取消</button>')
  );
