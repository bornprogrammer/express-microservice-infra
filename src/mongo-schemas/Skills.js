import mongoose from "mongoose";
import EntityStatus from "../../infrastructure/constants/EntityStatus";

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  domain: {
    type: Schema.Types.ObjectId,
    ref: "domain",
    required: true,
  },
  expRange: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: EntityStatus.ACTIVE,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
  },

}, {
  timestamps: true,
});

export default mongoose.model("Skill", skillSchema);


