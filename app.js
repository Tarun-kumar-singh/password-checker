const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const sha1 = require('sha1');
const request = require('request');

const publicDirectory = path.join('__dirname','../public')
const viewsPath = path.join('__dirname','../views')
const partialspath = path.join('__join','../views/partials')

//hbs config
app.use(express.static(publicDirectory))
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialspath) 

 const port = process.env.PORT || 3000

 app.get('/',(req,res) =>{
  res.render('index')
})

 app.get('/verify',(req,res)=>{

   headreqdata = sha1(req.query.data).toUpperCase().substring(0,5)
   tailreqdata =  sha1(req.query.data).toUpperCase().substring(5)
   url = 'https://api.pwnedpasswords.com/range/' + headreqdata
    request({url:url, json:true},(error,response) => {

    if (error) {
      return res.send({error:new Error(error)})
    }
    response_map = new Map()

    responsex = response.body.split("\r")
    
    responsex.forEach((item,index)=>{
      response_map.set(responsex[index].split(":")[0].replace('\n',""),responsex[index].split(":")[1])
 
       })

       if (response_map.has(tailreqdata)) { 
        res.send({ breached:true, no_of_times:response_map.get(tailreqdata) })

      }
      else{   res.send({ breached:false, no_of_times:undefined })}
     })

 })


 app.get('/hacklist',(req,res)=>{
  // url = 'https://haveibeenpwned.com/api/v3/breaches'
  // request({url:url, json:true},(error,response) => {
  //     if(error) return console.log(error)

  //   })

   res.render('breached_sites')

})

app.listen(port,()  =>{
  console.log("App is listening on port "+ port)
})