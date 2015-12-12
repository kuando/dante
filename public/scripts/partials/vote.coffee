require '../functions/serializeJSON'
notify = require '../functions/notify'

module.exports.init = ()->
  $vote = $("#vote")
  $voteExtras = $('.vote-extras')

  enableSave = ()->
    $('.save-vote').attr("disabled", false).text("保存投票")

  disableSave = ()->
    $('.save-vote').attr("disabled", true).text("已保存")

  $vote.on 'click', '.addVote', ()->
    optBtn = """
      <div>
        <button class="btn btn-default m-r-xs save-vote">保存投票</button>
        <button class="btn btn-pink cancel">关闭投票</button>
      </div>
    """
    $(this).hide().closest('div').append optBtn

  $vote.on 'click', '.delete', ()->
    $(this).parents('.form-group').remove()
    enableSave()
  $vote.on 'focus', 'input,textarea', ()->
    enableSave()
  $vote.on 'change', 'select', ()->
    enableSave()

  $vote.on 'click', '.cancel', ()->
    activityId = $('#activityId').val()
    if confirm "确认关闭投票?"
      $.ajax(
        url: "/api/activities/#{activityId}/deleteVote",
        method: 'DELETE',
      ).then (res)=>
        if res is true
          $(this).closest('div').siblings('.addVote').show()
          $(this).closest('div').remove()
          $('#voteCollapse').collapse('hide')
          notify.success "关闭投票成功!"


  $('.add-vote-option-btn').click ()->
    number = $voteExtras.find('.form-group').length
    field = """
      <div class="form-group">
        <label class="control-label col-xs-3">选项#{number+3}：</label>
        <div class="col-xs-15">
            <input class="form-control input-lg" type="text" name='options'
                   placeholder="请输入选项内容">
            <span class="delete glyphicon glyphicon-trash f-gray f-s-16 pull-right m-t-n-xxl m-r-xs"></span>
        </div>
      </div>
    """
    $voteExtras.append field
    enableSave()

  $vote.on 'click', '.save-vote', ()->
    activityId = $("#activityId").val()
    data = $('#voteForm').serializeObject()
    if data.description is ''
      return notify.danger "请填写投票主题"
    options = []
    for option, index in data.options
      if option.trim() is ''
        return notify.danger "请填写选项 #{index + 1} "
      options.push
        order: index
        option: option
    data.options = options
    if data.deadline is ""
      delete data.deadline

    $.ajax(
      url: "/api/activities/#{activityId}/addVote"
      type: "PUT"
      data: data
    ).then (res)->
      if res is true
        notify.success "保存投票成功!"
        disableSave()


