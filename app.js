//引入套件及伺服器變數設定
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePhrase = require('./generate_phrase')
const port = 8080

//設定樣版引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//路由設定
//bodyParser先放第一個
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const stupidphrase = generatePhrase(req.body)
  res.render('index', { stupidphrase: stupidphrase })
})

//開始express伺服器及監聽
app.listen(process.env.PORT || 8080, () => {
  console.log(`express app listening on port ${port} .`)
})