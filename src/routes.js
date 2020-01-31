const {Router}= require('express')
const router= Router()

router.get("/", (req, res)=>{
    res.render("main.ejs")
})

module.exports= router