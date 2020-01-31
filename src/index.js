require('dotenv').config()
require('./routes')
const express= require('express')
const app= express()
const path= require('path')

app.use(require('./routes'))

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.use('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname + '/public') ))

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server on port ", process.env.PORT)
})

//No se como coño arreglar lo d las imagenes
//No aparacen en la pantalla

