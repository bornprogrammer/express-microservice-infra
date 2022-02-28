import mongoose from "mongoose";

const { Schema } = mongoose;

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  benefits: {
    type: [{ elapseValue: { type: String, required: true }, productFeatures: { ref: "ProductFeature", type: Schema.Types.ObjectId } }],
    required: true,
  },
  planExpirationType: {
    type: String,
    enum: ["monthly", "quarterly", "half-yearly", "annually"],
    required: true,
  },
  isRecommended: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Plan", planSchema);