const express=require('express');
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js')


const app=express();
var items=["hi","hlo","namasthe"];
let workItems=[];

app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));
//to apply local css files to the server use app.use(express.static('pubilc'));
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    let today=date.getDate();
    console.log(today);
    let todayday=date.getDay();
    console.log(todayday);
    res.render('list',{
        listTitle:today,
        itemtobe:items,
    });
});

app.get('/work',function(req,res){
    res.render('list',{
        listTitle:"Work List",
        itemtobe:workItems
    })

});
app.get('/about',function(req,res){
    res.render('about');
})

app.post('/',function(req,res){
    const item=req.body.newItem;
    if (req.body.type==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect('/');
    }
   
});

app.listen(3000,function(){
console.log("server is running on port 3000");
})