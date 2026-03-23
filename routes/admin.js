const express = require("express")
const router =  express.Router()

router.get('/',(req, res) => {
    res.render("admin/index")
})  

router.get('/posts',(req, res) => {
    res.send("Pagina de posts")
})

router.get('/categorias',(req, res) => {
    res.send("Pagina de categorias")
})

router.get('/diamantes',(req, res) => {
    res.send("Pagina de diamantes")
})

module.exports = router