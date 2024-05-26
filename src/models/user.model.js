import { application } from "express";
import mongoose from "mongoose";

const roleEnum = ["User", "Company"];
const statusEnum = ["Applied", "Interviewing", "Offered", "Rejected"];

const arrayUnique = (array) => {
  return Array.isArray(array) && new Set(array).size === array.length;
};

const experienceSchema = mongoose.Schema({
  companyName: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isWorkingHere: { type: boolean, default: true },
});
const eductionSchema = mongoose.Schema({
  degree: { type: String, required },
  university: { type: String, required },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const applicationSchema = mongoose.Schema({
  jobID: { type: mongoose.Schema.Types.ObjectId, ref: "" },
  // * TODO: Needed to add Job Schema Reference
  status: { type: String, enum: statusEnum, default: "Applied" },
  appliedAt: { type: Date, required: true },
});

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum: roleEnum,
      default: "User",
    },
    profile: {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      about: {
        type: String,
      },
      skills: [
        {
          type: String,
          validate: [arrayUnique, "Skills must be unique"],
        },
      ],
      experience: [experienceSchema],
      education: [eductionSchema],
      applications: [applicationSchema],
    },
  },
  {
    timestamps: true,
  }
);



const User = mongoose.model("User", userSchema);


export {User};
