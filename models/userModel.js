import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer:{
      type:String,
      required:true
    },
    tokens:{
      type:Number,
      default:0,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


export default mongoose.model("users", userSchema);
