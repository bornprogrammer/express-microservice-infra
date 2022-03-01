import mongoose from "mongoose";

const { Schema } = mongoose;

const industryTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  },
}, {
  timestamps: true,
});

export default mongoose.model("IndustryType", industryTypeSchema);