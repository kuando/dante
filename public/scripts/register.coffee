$ = require 'jquery/dist/jquery'
require 'bootstrap/dist/js/bootstrap'

$ ->
  isValidate = ->
    username = $("input[name='username'").val()
    phone = $("input[name='phone'").val()
    password = $("input[name='password'").val()
    if username is ""
      alert "用户名不能为空"
      return false
    if phone is ""
      alert "手机不能为空"
      return false
    if password is ""
      alert "密码不能为空"
      return false
    return true

  $('#registerForm').on 'submit', (event) ->
    if isValidate() is not true
      event.preventDefault()
    else
      console.log 'submit'
      $(this)[0].submit()

















