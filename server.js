var express = require("express")
var app = express()
var port = process.env.port || 3000

app.use(express.static(__dirname + '/'))
app.set('views', 'public/views');
app.set('view engine', 'ejs')


const cardList = [
    {
        title: "Butterfly 1",
        image: "images/butterfly2.jpg",
        link: "About Butterfly 1",
        description: "Demo description about Butterfly 1"
    },
    {
        title: "Butterfly 2",
        image: "images/butterfly3.jpg",
        link: "About Butterfly 2",
        description: "Demo description about Butterfly 2"
    },
    {
        title: "Butterfly 3",
        image: "images/butterfly4.jpg",
        link: "About Butterfly 3",
        description: "Demo description about Butterfly 3"
    }

]


app.listen(port,()=>{
    console.log("App listening to : " ,port)
})

app.get('/',(req,res,next) =>{
    res.render('index',{cards:cardList})
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

