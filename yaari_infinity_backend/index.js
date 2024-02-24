const express = require('express')
const cors = require('cors')

const app = express()
const port = 7777

app.get('/api/yaariinfinity',(req,res)=>{
    res.json("Congratulation..! Yaari Infinity Server Successfully working through Vercel Hosting")
})
app.get('/',(req,res)=>{
    res.json("Congratulation..! Yaari Infinity Server Successfully working through Vercel Hosting")
})


app.listen(port,()=>{
    console.log(`Yarri Infinity Server Running on Port no:${port}`)
})