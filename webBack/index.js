const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
let requests = require('requests');
//const staticPath = path.join(__dirname,'../webfront');
app.set('views','./templates/views');
app.set("view engine","hbs");

//const staticPath = '/a/nodejs/weatherApp/home.html'
//console.log(staticPath);
//app.use(express.static(staticPath));
// app.get('/',(req,res)=>{

// })

const prartialPath = path.join(__dirname,'/templates/partials')
console.log(prartialPath)

hbs.registerPartials(prartialPath);
app.get("",(req,res)=>{
    res.render("index");
})
app.get('/contact',(req,res)=>{
    res.render('contact',{
        name:'king'
    })
})
app.get('/temp',(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name} &appid=452c3d99f10c78c5a9dce665ad125518`)
    .on('data', function (chunk) {
      const objdata = JSON.parse(chunk);
      const arrdata = [objdata];
      console.log(arrdata);
      //console.log(chunk);
      //console.log(objdata)
      //console.log(arrdata);
    //const k = arrdata[0].main.temp;
     console.log(`city name is ${arrdata[0].name} and the temperature is ${arrdata[0].main.temp}`);
      const n = arrdata[0].main.temp;
       const k = n.toString();
       console.log(k);
      res.write(arrdata[0].main.temp.toString());
    })
    .on('end', function (err) {
      if (err) return console.log('connection closed due to errors', err);
       res.end();
      console.log('end');
    });
})
app.get('/contact/*',(req,res)=>{
    res.render('404',{
        Error404:'Something Went Wrong ',
        Page: "Page in contact could not found"
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        Error404:'Something Went Wrong ',
        Page: "Page could not found"
    })
})


app.listen(3000,()=>{
    console.log('listening at port 3000');
})
