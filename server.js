var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var port = process.env.port || 3000

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', 'public/views');
app.set('view engine', 'ejs')

let collection;

let cardList = [
    /*{
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
    */
]


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vish:mongopass@774-hd.s722tio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function runDB() {
    try {
      await client.connect();
      collection = client.db().collection('Cats');
      //console.log(collection);
    }catch(err){
        console.error(err)
    }
  }
  

function insertCat(cat,callback){
    collection.insertOne(cat,callback);
}



app.listen(port,()=>{
    console.log("App listening to : " ,port)
    runDB().catch(console.dir);
})

app.get('/', (req, res, next) => {
    getAllCats((err, cards) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error occurred');
      }
      res.render('index', { cards });
    })
  })

app.post('/api/cat',(req,res,next) =>{
    let cat = req.body;
    //console.log(cat)
    insertCat(cat,(err,result) =>{
        if(!err){
            res.json({statusCode:201,data:result,messsage:'success'})
        }
    })
})

function getAllCats(callback){
    collection.find({}).toArray(callback);
}

app.get('/api/cat',(req,res,next)=>{
    getAllCats((err,result) =>{``
        //console.log(result)
        if(!err){
            cardList = result;
            //console.log(cardList)
            res.json({statusCode:200,data:result,message:'success'})
        }
    })
})



