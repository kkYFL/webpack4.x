// express

let express = require('express');
let app = express();
app.get('/api/user',(req,res) => {
  res.json({name:'服务端数据返回结果'});
})

app.get('/person/userinfo',(req,res) => {
  res.json({name:'服务端数据返回结果userinfo'});
})

app.listen(5000);