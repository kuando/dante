require 'select2'
require 'select2/dist/css/select2.css'
require 'select2-bootstrap-css/select2-bootstrap.css'
module.exports.init = () ->
  $('.js-example-basic-single').select2({
    maximumSelectionLength: 5
  })

