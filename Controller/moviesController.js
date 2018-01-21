var movies=require('./moviesData');
var dbService=require("../services/dbServices");
exports.getAllMovies=function(req,res,next)
{
  var db=dbService.database;
  console.log("db",dbService);
  var moviesCollection=db.collection("movies");
  moviesCollection.find().toArray().then(function(result){
    var outputjson={
      "isSuccess":true,
      "data":result
    }
    return res.json(outputjson);
  });
};
exports.addNewMovie=function(req,res,next)
{
var db=dbService.database;
var movie=req.body;
moviesCollection=db.collection("movies");
moviesCollection.insert(movie).then(function(save_data)
{
  return res.json({
    "isSuccess":true
  });
});
}
