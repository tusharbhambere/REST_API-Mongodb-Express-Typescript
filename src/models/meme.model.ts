import mongoose from "mongoose";


interface MemephotoI{
    memephoto:String
}
interface MemephotoDocument extends mongoose.Document{
    memephoto:String

}
const MemePhotoSchema =new mongoose.Schema({
    memephoto:{
        type:String,
        require:true,
    }
});
interface Instamodel extends mongoose.Model<MemephotoDocument>{
    set(x:MemephotoI):MemephotoDocument;
}
MemePhotoSchema.statics.set=(x:MemephotoI)=>{
    return new memePhoto(x);

}
const memePhoto=mongoose.model<MemephotoDocument,Instamodel>("memePhoto",MemePhotoSchema);
memePhoto.set({
    memephoto:"random image"
});
export{memePhoto};