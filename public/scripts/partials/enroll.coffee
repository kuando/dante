#添加报名
notify = require "../functions/notify"

module.exports.init = ()->
  activityId = $('#activityId').val()
  $enroll = $('#enroll')
  $enroll.on 'click', '.addenroll', ()->
    optBtn = """ <div><button class="btn btn-default m-r-xs save-enroll">保存报名</button>
                 <button class="btn btn-pink cancel">关闭报名</button></div>
             """
    $(this).hide().closest('div').append optBtn

  $enroll.on 'click', '.delete', ()->
    $(this).parents('.form-group').remove()
    $('.save-enroll').text('保存报名').attr('disabled': false)


  $enroll.on 'click', '.cancel', ()->
    if confirm "确认关闭报名?"
      $.ajax(
        url: "/api/activities/#{activityId}/deleteEnroll",
        method: 'DELETE',
      ).then (res)=>
        if res is true
          $('#enrollCollapse').collapse('hide')
          $(this).closest('div').siblings('.addenroll').show()
          $(this).closest('div').remove()
          notify.success "关闭报名成功!"


  $(".enroll-field-btn").click ()->
    label = $(this).text().trim()
    field = """
      <div class="form-group enroll-field">
          <label class="control-label col-xs-4">#{label}：</label>

          <div class="col-xs-20">
              <input class="form-control input-lg" type="text" placeholder="请输入你的#{label}">
              <span class="delete glyphicon glyphicon-trash f-gray f-s-16 pull-right m-t-n-xxl m-r-xs"></span>
          </div>
      </div>
    """
    $('.enroll-extras').append field
    $('.save-enroll').text('保存报名').attr('disabled': false)

  #保存报名信息
  $enroll.on 'click', '.save-enroll', ()->
    extras = []
    $.each $("#enrollForm").find(".enroll-extras .form-group"), (index, field)->
      $field = $(field)
      inputType = $field.find('input').attr("type")
      isRequired = !!$field.find('input').attr('required')
      extras.push
        order: index
        label: $field.find("label").text().replace(/[\s\:\：]/, '')
        inputType: inputType
        isRequired: isRequired

    $.ajax({
      url: "/api/activities/#{activityId}/addEnroll",
      method: 'PUT',
      data: {extras: extras}
    }).then (res)->
      if res is true
        $('.save-enroll').text('已保存').attr('disabled': true)
        notify.success("报名信息保存成功!")











