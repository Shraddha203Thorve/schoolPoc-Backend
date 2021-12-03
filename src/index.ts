import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: "*"
  };
  
  app.use(cors(corsOptions));
  app.use((req:any, res:any, next:any) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");

    app.listen(process.env.PORT, () => {
      app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
      console.log("Server is running");
    });
  }).catch(()=>{
      console.log("error")
  })

app.use("/api/admission",require("./routes/admission"))