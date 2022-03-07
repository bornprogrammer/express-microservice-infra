import mongoose from "mongoose";

const { Schema } = mongoose;

const candidateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  experiance: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: {
      mandatory: {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: "Skill",
      },
      optional: {
        type: [Schema.Types.ObjectId],
        required: false,
        ref: "Skill",
      },
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model("Candidate", candidateSchema);