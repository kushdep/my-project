import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from './routes/categoryRoute.js';
import productRoutes from './routes/productRoutes.js'
import cors from "cors";
import path from 'path'
import { fileURLToPath  } from "url";    
dotenv.config();  

//databse config
connectDB();

//esmodule fix
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

//rest object
const app = express();

//middlewares
app.use(cors());//CORS (CROSS ORIGIN RESOCE SHARING) is a feature allows a web browser from making an API request from one domain to other domain.
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./client/build')));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

//rest API
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html`'))
})

// app.get("/", (req, res) => {
//   res.send("<h1>WELCOME To Ecommerce App </h1>");
// });

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});