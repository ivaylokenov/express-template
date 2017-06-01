const express = require('express')
const handlebars = require('express-handlebars')

module.exports = (app) => {
  app.engine('handlebars', handlebars({
    defaultLayout: 'main'
  }))
  app.set('view engine', 'handlebars')

  app.use(express.static('public'))

  console.log('Express ready!')
}
