var express = require("express")
var app = express()
var port = process.env.port || 3000

app.use(express.static(__dirname + '/'))
app.set('view engine', 'ejs')

app.listen(port,()=>{
    console.log("App listening to : " ,port)
})

app.get('/',(req,res,next) =>{
    res.render('index.html')
})

app.post('/AddTwoNumbers',(req,res,next)=>{

    number1 = parseInt(req.query.number1)
    number2 = parseInt(req.query.number2)

    obj = {
        message : "success",
        total : number1 + number2
    }
    res.json(obj)
})

app.post('/MultiplyTwoNumbers',(req,res,next)=>{

    number1 = parseInt(req.query.number1)
    number2 = parseInt(req.query.number2)

    obj = {
        message : "success",
        total : number1 * number2
    }
    res.json(obj)

})

