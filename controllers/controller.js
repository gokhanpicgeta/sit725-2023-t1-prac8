let collection = require('../models/cat')


function postCat(req, res){
    cat = req.body;
    collection.postCat(cat,(err,result)=>{
        if(!err){
            res.json({statusCode:201,data:result,messsage:'post success'})
        }
    });
}

function getAllCats(req,res){
    collection.getAllCats((err, cards) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error occurred');
        }
        res.render('index', { cards });
    })
}

//todo deleteCat

function deleteCat(req, res){
    cat = req.body;

    //console.log(collection)

    collection.deleteCat(cat,(err,result)=>{
        if(!err){
            res.json({statusCode:202,data:result,message:'delete success'})
        }
    });
}


module.exports = {postCat,getAllCats,deleteCat}