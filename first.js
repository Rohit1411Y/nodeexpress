const express = require('express');
const app = express();
app.get('/',function(req,res){
res.send('Hello King');
})
app.get('/about',(req,res)=>{
    res.send('about us');
})

app.listen(3000,()=>{
    console.log('listening at port 3000');
});