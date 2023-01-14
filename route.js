const express = require("express");
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    // res.send('wlcm to my home page');
    res.write('<h1>wlcm to my home page </h1>');
    res.write('<h2> We are the best express js developer community contact us for more information</h2>');
    res.send();
});
app.get('/about',(req,res)=>{
    res.send('wlcm to my about page');
});
app.get('/contact',(req,res)=>{
    res.write('<h1>contact us here</h1>')
    res.write('<h2> more info will be provided here </h2>');
    res.send();
});
app.get('/temp',(req,res)=>{
   res.json([
    {
      'id':1,
     'city':'jaipur',
    'temp':'14 degree celcius'
   },
   {
    'id':2,
   'city':'Alwar',
  'temp':'11 degree celcius'
 },
 {
    'id':3,
   'city':'Ajmer',
  'temp':'9 degree celcius'
 },
 {
    'id':4,
   'city':'jodhpur',
  'temp':'18 degree celcius'
 },
 {
    'id':5,
   'city':'udaipur',
  'temp':'4 degree celcius',
  'humidity': undefined
 },
 {
    "king":undefined
 }
   

])
})


app.listen(port,()=>{
    console.log(`listening at port ${3000}`);
})