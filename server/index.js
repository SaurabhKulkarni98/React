import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
import questionRoutes from "./routes/Questions.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/',(req,res)=> {
    res.send("This is stack overflow clone API")
})
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
const PORT = process.env.PORT || 4000;

const CONNECTION_URL = "mongodb+srv://saurabh:saurabh@cluster0.mywd3ej.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).
then(() => app.listen(PORT,() => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))