import mongoose from "mongoose";


interface InstaphotoI{
    image:String
}
interface InstaphotoDocument extends mongoose.Document{
    image:String

}
const InstaPhotoSchema =new mongoose.Schema({
    image:{
        type:String,
        require:true,
    }
});
interface Instamodel extends mongoose.Model<InstaphotoDocument>{
    set(x:InstaphotoI):InstaphotoDocument;
}
InstaPhotoSchema.statics.set=(x:InstaphotoI)=>{
    return new photoInsta(x);

}
const photoInsta=mongoose.model<InstaphotoDocument,Instamodel>("photoInsta",InstaPhotoSchema);
photoInsta.set({
    image:"random image"
});
export{photoInsta};