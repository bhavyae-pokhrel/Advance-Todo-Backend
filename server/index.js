const express = require('express');
const app = express();


app.use(express.json());

require("dotenv").config();

const fileuploading = require("express-fileupload");
app.use(fileuploading({
  useTempFiles: true,
  tempFileDir: '/tmp'
}));

const cors = require("cors");
app.use(cors());


const router = require("./routes/route");
app.use("/api/v1", router);

const dbConnect = require("./config/database");
dbConnect();

const cloudinary=require("./config/cloudinary")
cloudinary.cloudinaryConnect()

app.get("/", (req, res) => {
  res.send(`<h1>TODO-LIST BACKEND</h1>`);
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});
