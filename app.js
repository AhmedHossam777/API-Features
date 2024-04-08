const express = require('express')

const app = express()

app.use(express.json())

app.use('/', (req,res)=> {
  res.send('Hello, world');
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log(`app listening on port ${port}`);
})