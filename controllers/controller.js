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


module.exports = {postCat,getAllCats}