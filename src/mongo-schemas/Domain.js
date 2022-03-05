import mongoose from "mongoose";

import EntityStatus from "../../infrastructure/constants/EntityStatus.js";

const { Schema } = mongoose;

const domainSchema = new Schema({
  name: {
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


export default mongoose.model("Domain", domainSchema);
