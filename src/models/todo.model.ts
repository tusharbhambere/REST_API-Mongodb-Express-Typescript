import mongoos from "mongoose"

interface TodoI{
    title :String;
    description:String;
}
interface TodoDocument extends mongoos.Document{
    title :String;
    description:String;
}
 const todoSchema =new mongoos.Schema({
     title:{
         type:String,
         require:true,
     } ,
     description:{
        type:String,
        require:false,
    }
 });
 interface todoModelInterface extends mongoos.Model<TodoDocument>{
     set(x: TodoI):TodoDocument;
 }
 todoSchema.statics.set = (x: TodoI)=> { 
     return new Todo(x);
 };
 const Todo=mongoos.model<TodoDocument,todoModelInterface>("Todo",todoSchema);
 Todo.set({
     title:"some title",
     description:"some Description"
 })
 export{Todo};