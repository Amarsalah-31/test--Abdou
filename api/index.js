const express = require("express");
const dotenv = require('dotenv');
const app = express();
const {Pool} = require('pg');
const Address = require('./model/Address');
const city = require('./model/city');
const { application } = require("express");
 dotenv.config({
     path:"./config.env"

 });
// import middlewares
const debug = require('./middleware/debug');

//import router 
const citiesRouter = require('./route/citiesRouter');
const favoritesRouter = require('./route/favoritesRouter');

//  connecting to postgres Database
const postgres = new Pool({ssl: {rejectUnauthorized:false}});
app.use(express.json());
app.use(debug);

app.post("/cities", async(req,res) =>{
    const codepostal = req.body;
    try{
        await postgres.query("INSER INTO code_city(name)VALUES($1)",[
            codepostal.nomber
        ]);
        return res.status(201).json({
            message:"success",
        })
    }catch (err){
        return res.status(400).json({
            message:"An error happened...",
          })
        }
      })
      
      app.get("/cities", async ( req,res ) =>{
        let allCities;
        try{
          allCities = await Postgres.query("SELECT * FROM code_cities");
          return res.city(201).json({
            message:"Success",
            data: allCities.rows,
          })
        } catch (err) {
          return res.status(400).json({
            message: "An error happened..."
          })
        }
      })
      
      app.listen(4000, () => {
          console.log("Listening on Port");
   
})
