const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt=require("bcrypt");
const initializePassport =require('./passport-config');
const flash=require("express-flash")
const session =require("express-session");
const methodOverride=require("method-override");
//DB
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI =
  "mongodb+srv://kanhaiya:Mongodb@123@tread-lqrqi.mongodb.net/Tread?retryWrites=true&w=majority";

mongoose
  .connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var db = mongoose.connection;
var ObjectID = require("mongodb").ObjectID;

const PORT = process.env.PORT || 5000;
// Middleware

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

var bodyParser = require("body-parser");
const passport = require("passport");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.get('/',checkAuthenticated,(req,res)=>{
  res.redirect('/');
})

app.get('/signin',checkNotAuthenticated,(req,res)=>{
  res.redirect('/signin');
})

app.post('/signin', checkNotAuthenticated,passport.authenticate('local',{
  successRedirect:'/dashboard',
  failureRedirect:'/signin',
  failureFlash:true
}))

app.get('/signup',checkNotAuthenticated,(req,res)=>{
  res.redirect('/signup')
})

app.post("/signup", checkNotAuthenticated,async (req, res) =>{
  const body = req.body;
  console.log(body);
  console.log(body.user.first);
  
  const first = req.body.user.first;
  const last = req.body.user.last;
  const email = req.body.user.email;
  const password = req.body.user.password;
  const type = req.body.user.type;
  const category = req.body.user.category;
try{
  const hashedPassword= bcrypt.hash(password,10);

  var user = {
    id: new ObjectID(),
    first_name: first,
    last_name: last,
    email_id: email,
    password: hashedPassword,
    no_clients: type,
    trainer_category: category,
  };
  console.log(user); 
  db.collection("MongoData").insertOne(user);
  
   res.redirect('/dashboard');
}catch{
  res.redirect('/signup');
}
});

app.delete('/logout',(req,res)=>{
  req.logOut();
  req.redirect('/signin');
})

app.use(flash());
app.use(session({
  secret:"Lal",
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session()); 
app.use(methodOverride('_method'))

initializePassport(passport,
  email=> db.collection("MogoData").findOne(user=>user.email===email),
  id=>db.collection("MongoData").findOne(user=>user.id===id)
);



function checkAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  return res.redirect('/signin');
}

function checkNotAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return res.redirect('/')
  }
   return next();
}