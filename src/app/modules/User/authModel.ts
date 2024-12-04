import { model, Schema } from "mongoose";
import { Tuser } from "./authInterface";
import bcrypt from 'bcrypt'
import httpStatus from 'http-status-codes'
import App__Error from "../../error/App__Error__";


const userSchema = new Schema<Tuser>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name must not exceed 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
    isActive: {
        type: String,
        enum: ["active", "blocked"],
        default: "active",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
    },
    role: {
        type: String,
        enum: ["admin", "moderator", "superAdmin", "user"],
        default: "user",
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true,
});

userSchema.pre('save', async function (next) {
    try {
         this.password = await bcrypt.hash(this.password, Number(12));
        next(); 
    } catch (err) {
        throw new App__Error(httpStatus.INTERNAL_SERVER_ERROR,'Error hashing password') 
    }
});

userSchema.pre('save', async function (next) {
    try {
      const isExistUser = await User.findOne({ email: this.email });
      if (isExistUser) {
        throw new App__Error(httpStatus.CONFLICT,'This email is already in use. Please try another email.')
      }
      next(); 
    } catch (error:any) {
      next(error); 
    }
  });
  
export const User = model<Tuser>('User', userSchema);
