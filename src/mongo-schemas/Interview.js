import { optional } from "joi";
import mongoose from "mongoose";

const { Schema } = mongoose;

const interviewSchema = new Schema({
  position: {
    type: Schema.Types.ObjectId,
    ref: "Position",
    required: true,
  },
  candidateEmail: {
    type: String,
    required: true,
  },
  candidateExp: {
    type: Number,
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
  },
  mandatorySkills: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "Skill",
  },
  optionalSkills: {
    type: [Schema.Types.ObjectId],
    required: false,
    ref: "Skill",
  },
  resume: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: optional,
  },
  phone: {
    type: String,
    required: true,
  },
  interviewDate: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Interview", interviewSchema);