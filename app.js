var express=require('express');
var app=express();
var router=require('./controller');
app.set('view engine','ejs');

app.use(express.static('./public'));
app.get('/',router.showIndex);
app.get('/:showname',router.albumName);

app.listen(3000);