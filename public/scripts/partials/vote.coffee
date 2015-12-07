$ = require 'jquery/dist/jquery'
bst = require 'bootstrap/dist/js/bootstrap';

module.exports.init = ()->
  $("#vote").on('click', '.addVote',
    ()-> $(this).html('<button class="btn btn-default m-r-xs">保存</button><button class="btn btn-white">取消</button>')
  );
