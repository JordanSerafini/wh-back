// import
import express from "express";
import router from "./routes/router";
import dotenv from "dotenv";
import cors from "cors";


//config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
};

app.use(cors(corsOptions));




const cloudinary = require("cloudinary").v2;
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes settings
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


