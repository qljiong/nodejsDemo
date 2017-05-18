exports.showIndex=function(req,res){
    res.send("this is index page");
}

exports.albumName=function(req,res){
    res.send("albumName is "+req.params.showname);
}