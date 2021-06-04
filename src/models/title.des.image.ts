import mongoos from "mongoose"

interface HomeI{
    title :String;
    description:String;
    photo:String;

}
interface HomeDocument extends mongoos.Document{
    title :String;
    description:String;
    photo:String;
}
 const HomeSchema =new mongoos.Schema({
     title:{
         type:String,
         require:true,
     } ,
     description:{
        type:String,
        require:true,
    } , photo : {
        type:String,
        require:true,
    }
 });
 interface HomeModelInterface extends mongoos.Model<HomeDocument>{
     set(x: HomeI):HomeDocument;
 }
 HomeSchema.statics.set = (x: HomeI)=> { 
     return new Home(x);
 };
 const Home=mongoos.model<HomeDocument,HomeModelInterface>("Home",HomeSchema);
 Home.set({
     title:"some title",
     description:"some Description",
     photo:"some links"
 });
 export{Home};