import express,{Request,Response} from "express"
import dotenv from "dotenv"
import { router } from "./routes/routes";
import mongoose from "mongoose"


dotenv.config();
mongoose.connect(
    process.env.MONGODB_URL as string,{
        useUnifiedTopology:true,
        useNewUrlParser: true
},
()=> {
    console.log("Db connected ")

}
);


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",router);


 


app.listen(process.env.PORT,()=>{
    console.log(`server is rocking at ${process.env.PORT}`)
})