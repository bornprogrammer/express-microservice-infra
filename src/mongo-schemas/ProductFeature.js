import mongoose from "mongoose";

const { Schema } = mongoose;

const productFeatureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  elapsedType: {
    type: String,
    enum: ["value_count", "days_count", "plan_validity"],
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("ProductFeature", productFeatureSchema);