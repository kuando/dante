$ = require 'jquery/dist/jquery'
require 'bootstrap-notify/bootstrap-notify'

$ ->
  #收藏
  $("#share").on('click', '.favorite-btn',
    ()-> $(this).removeClass("star-false").addClass("star-true")
  );
  $("#share").on('click', '.star-true',
    ()-> $(this).removeClass("star-true").addClass("star-false")
  );

  $('.show-notification').click(
    ()->$.notify({
      icon: 'glyphicon glyphicon-ok'
      message: "这是一条成功的提示"
    },{
      type:'success'
      offset: 150
      placement: {
        from: "top",
        align: "center"
      }
      template: '<div data-notify="container" class="col-xs-6 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    })
  );