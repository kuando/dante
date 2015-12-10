module.exports.init = ()->
  window.UMEDITOR_HOME_URL = '/js/lib/ueditor/'
  editor = UE.getEditor('umEditor', {
    toolbars: [[
      'fullscreen', 'source', '|', 'undo', 'redo', '|',
      'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'pasteplain', '|',
      'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist',
      'selectall', 'cleardoc', '|', 'paragraph', 'fontsize', '|', 'indent',
      'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
      'link', 'unlink', '|', 'insertimage', 'insertvideo', '|',
      'horizontal', '|',
      'inserttable', 'deletetable'
    ]],
    initialFrameHeight: 480,
    autoHeightEnabled: false,
    autoFloatEnabled:false,
    elementPathEnabled: false,
    textarea: 'item.content'
  })

  mode = $('#editorMode').val() || ''
  if mode is 'weixin'
    require('./weixinComponent').init(editor)

  editor # 返回editor实例


