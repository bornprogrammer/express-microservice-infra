import mongoose from "mongoose";

import bcrypt from "bcrypt";

import UserStatus from "../../infrastructure/constants/UserStatus.js";

import UserType from "../../infrastructure/constants/UserType.js";

import SignUpType from "../../infrastructure/constants/SignUpType.js";

const { Schema } = mongoose;

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  lname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 16,
  },
  userType: {
    type: String,
    enum: [UserType.EMPLOYER, UserType.INTERVIEWER, UserType.RECRUITER, UserType.SUBEMPLOYER],
    required: true,
  },
  signupType: {
    type: String,
    enum: [SignUpType.INCRUITER, SignUpType.GOOGLE, SignUpType.LINKED_IN],
    required: true,
  },
  status: {
    type: String,
    enum: [UserStatus.ACTIVE, UserStatus.INACTIVE, UserStatus.SUSPENDED],
    default: UserStatus.INACTIVE,
  },
  address: {
    type: { address1: { type: String, required: true }, address2: { type: String }, pincode: { type: String, required: true }, city: { type: String, required: true }, state: { type: String, required: true } },
  },
  company: {
    type: { name: { type: String, required: true }, email: { type: String, required: true }, address: { address: { type: String, required: true }, city: { type: String, required: true }, state: { type: String, required: true }, pincode: { type: String, required: true } }, companyFoundedIn: { type: String }, industryType: { type: Schema.Types.ObjectId, required: true, ref: "IndustryType" }, aboutUs: { type: String } },
  },
  scope: {
    type: String,
    default: "profile",
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 10,
  },
},
  {
    timestamps: true,
  },
);

async function encryptPassword(next) {
  const context = this;
  if (context.password) {
    const salt = await bcrypt.genSalt(10);
    context.password = await bcrypt.hash(context.password, salt);
  }
  next();
}

userSchema.pre("save", encryptPassword);

export default mongoose.model("User", userSchema);