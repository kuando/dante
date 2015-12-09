$ = require 'jquery/dist/jquery'
bst = require 'bootstrap/dist/js/bootstrap';

module.exports.init = ()->
  $vote = $("#vote")
  $voteExtras = $('.vote-extras')

  $vote.on 'click', '.addVote', ()->
    optBtn = """
      <div>
        <button class="btn btn-default m-r-xs">保存</button>
        <button class="btn btn-white cancel">取消</button>
      </div>
    """
    $(this).hide().closest('div').append optBtn

  $vote.on 'click', '.delete', ()->
    $(this).parents('.form-group').remove()

  $vote.on 'click', '.cancel', ()->
    $(this).closest('div').siblings('.addVote').show()
    $(this).closest('div').remove()
    $('#voteCollapse').collapse('hide')

  $('.add-vote-option-btn').click ()->
    number = $voteExtras.find('.form-group').length
    field = """
      <div class="form-group">
        <label class="control-label col-xs-3">选项#{number+3}：</label>
        <div class="col-xs-15">
            <input class="form-control input-lg" type="text"
                   placeholder="请输入选项内容">
            <span class="delete glyphicon glyphicon-trash f-gray f-s-16 pull-right m-t-n-xxl m-r-xs"></span>
        </div>
      </div>
    """
    $voteExtras.append field

