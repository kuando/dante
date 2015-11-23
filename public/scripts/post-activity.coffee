$ = require 'jquery/dist/jquery'
require './lib/umeditor/themes/default/css/umeditor.css'
require './lib/umeditor/umeditor.config'
require './lib/umeditor/umeditor'
require './lib/umeditor/lang/zh-cn/zh-cn'

$ ->
  um = UM.getEditor('myEditor')