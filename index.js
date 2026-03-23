// Modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const path = require('path')  // ← ADICIONADO
const app = express()
const admin = require("./routes/admin")

// Config
// 1. STATIC FILES PRIMEIRO (obrigatório!)
app.use(express.static(path.join(__dirname, 'public')))

// 2. Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// 3. Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Rotas 
app.get('/', (req, res) => {
    // Opção 1: HTML estático (se existir public/index.html)
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'posts.html'))
})


// Rotas Admin
app.use('/admin', admin)
    
// Porta
const PORT = 8081
app.listen(PORT, () => {        
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}/`)
})