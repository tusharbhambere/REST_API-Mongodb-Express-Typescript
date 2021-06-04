import express ,{Request,Response} from "express"
import { memePhoto } from "../models/meme.model";
import { photoInsta } from "../models/photo.model";
import { Home } from "../models/title.des.image";



const router=express.Router()
//post
router.post("/homecreat",async(req:Request,res:Response)=>{
 const {title,description,photo}= req.body;
 const item= Home.set({title,description,photo});
 await item.save();
 return res.status(200).json({
data:item,
 });
});

router.get("/homeget",async(req:Request,res:Response)=>{
 try {
    const item= await Home.find({});
    return res.status(200).json({
        data:item,
    });
     
 } catch (error) {
     return res.status(500).json({
         error:error
     });
     
 }
 });

//image post get insta
router.post("/addphoto",async(req:Request,res:Response)=>{
    const {image}= req.body;
    const item= photoInsta.set({image});
    await item.save();
    return res.status(200).json({
   data:item,
    });
   });
   
   router.get("/getphoto",async(req:Request,res:Response)=>{
    try {
       const item= await photoInsta.find({});
       return res.status(200).json({
           data:item,
       });
        
    } catch (error) {
        return res.status(500).json({
            error:error
        });
        
    }
    });

//memes photo
router.post("/addmeme",async(req:Request,res:Response)=>{
    const {memephoto}= req.body;
    const item= memePhoto.set({memephoto});
    await item.save();
    return res.status(200).json({
   data:item,
    });
   });
   
   router.get("/getmeme",async(req:Request,res:Response)=>{
    try {
       const item= await memePhoto.find({});
       return res.status(200).json({
           data:item,
       });
        
    } catch (error) {
        return res.status(500).json({
            error:error
        });
        
    }
    });



 //update

// router.put("/update",async(req:Request,res:Response)=>{
//     try {
//         const filter={
//             title:req.body.title,
//         };
//         const update={
//             description:req.body.description
//         };
//        const item= await Home.updateOne(filter,update,{
//            new:true,
//        });
//        return res.status(200).json({
//            data:item,
//        });
        
//     } catch (error) {
//         return res.status(500).json({
//             error:error
//         });
        
//     }
    
   
//    });
//delete

// router.delete("/delete",async(req:Request,res:Response)=>{
//     try {
//         const filter={
//             title:req.body.title,
//         };
        
//        const item = await Todo.deleteOne(filter).then((data)=>res.json({
//            data:data
//        })).catch((e)=>{
//            console.log(e)
//        }
//        )
       
//     } catch (error) {
//         return res.status(500).json({
//             error:error
//         });
        
//     }
    
   
//    });


    export{router};