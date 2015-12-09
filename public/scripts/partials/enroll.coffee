#添加报名
module.exports.init = ()->
  $enroll = $('#enroll')

  $enroll.on 'click', '.addenroll', ()->
    optBtn = """ <div><button class="btn btn-default m-r-xs">保存</button>
                 <button class="btn btn-white cancel">取消</button></div>
             """
    $(this).hide().closest('div').append optBtn

  $enroll.on 'click', '.delete', ()->
    $(this).parents('.form-group').remove()

  $enroll.on 'click', '.cancel', ()->
    $(this).closest('div').siblings('.addenroll').show()
    $(this).closest('div').remove()
    $('#enrollCollapse').collapse('hide')

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




