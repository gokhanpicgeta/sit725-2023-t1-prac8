const {expect} = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat'

let cat = {title:"Butterfly 6", image:'images/butterfly1.jpg', description: "Butterfly 6", link: "Butterfly 6"}

describe('test GET',function(){
    it('testing for get',function(done){
        request(url,function(err,res,anotherThing){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});


describe('test POST', function(){
    it('post cat to DB', function(done){
        request.post({url:url,form:cat}, function(err,res,body){
            obj = JSON.parse(body)
            expect(obj.statusCode).to.equal(201);
            done();
        });
    });
});

describe('test DELETE', function(){
    it('delete cat from DB', function(done){
        request.delete({url:url,form:cat}, function(err,res,body){
            //console.log(obj)
            obj = JSON.parse(body)
            expect(obj.statusCode).to.equal(202);
            done();
        });
    });
});



