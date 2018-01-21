var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://lgrevastimi6:greenstarz6@ds127389.mlab.com:27389/projectorapp").then(function(client)
{
  console.log("connected to db");
    exports.database=client.db("projectorapp");
  });

}
