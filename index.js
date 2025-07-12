import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyparser from "body-parser";

const __dirname=dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var email='';
var pass='';

function signin(req,res,next){
  console.log(req.body);
  email=req.body['email'];
  pass=req.body['password'];
  next();
}

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs",{ activePage: "home" });
});
app.get("/subscribe",(req,res)=>{
  res.render("subscribe.ejs");
});
app.get("/signup",(req,res)=>{
  res.render("signup.ejs");
})

app.get("/technology",(req,res)=>{
  res.render("technology.ejs",{ activePage: "technology" });
});
app.get("/design",(req,res)=>{
  res.redirect('https://www.design.com');
});
app.get("/culture",(req,res)=>{
  res.render("culture.ejs",{ activePage: "culture" });
})
app.get("/business",(req,res)=>{
  res.render("business.ejs",{ activePage: "business" });
})
app.get("/politics",(req,res)=>{
  res.render("politics.ejs",{ activePage: "politics" });
})
app.get("/simon",(req,res)=>{
  res.sendFile(__dirname + "/public/simoon/index.html");
})
app.get("/tindog",(req,res)=>{
  res.sendFile(__dirname + "/public/tindog/index.html");
})
app.get("/drum",(req,res)=>{
  res.sendFile(__dirname + "/public/drum/index.html");
})
app.get("/dice",(req,res)=>{
  res.sendFile(__dirname + "/public/dice/dicee.html");
})

app.post("/submit",signin,(req,res)=>{
  const email=req.body.email;
  res.render("welcome.ejs",{userEmail:email});
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


