$ = require 'jquery/dist/jquery'
module.exports.init = ()->
  window.UMEDITOR_HOME_URL = '/js/lib/umeditor/'
  editor = UM.getEditor('umEditor')
  mode = $('#editorMode').val() || ''
  if mode is 'weixin'
    require('./weixinComponent').init(editor)


