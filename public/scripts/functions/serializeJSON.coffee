#序列化表单为javascript对象
$.fn.serializeObject = ()->
  obj = {}
  a = this.serializeArray()
  $.each a, ()->
    name = this.name
    value = this.value?= ''
    if obj[name]?
      if not obj[name].push?
        obj[name] = [obj[name]]
      obj[name].push value
    else
      obj[name] = value
  obj
