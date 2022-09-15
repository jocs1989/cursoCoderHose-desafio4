

// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const productos = require(__dirname+'/routes/productos.js')

app.use('/static',express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));//para desifrar lo que se manda por post
app.use('/api/productos',productos);

 

app.get('/',async (req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})

const listener = app.listen(8080, function() {
  try{
  console.log("Your app is listening http://localhost:8080 " );
}
catch(err)
{
  console.error(err);
}});


