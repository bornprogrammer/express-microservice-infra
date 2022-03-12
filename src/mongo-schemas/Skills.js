import mongoose from "mongoose";

import EntityStatus from "../../infrastructure/constants/EntityStatus.js";

import SkillType from "../constants/SkillType.js";

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
  type: {
    required: true,
    type: String,
    enum: [SkillType.MANDATORY, SkillType.OPTIONAL, SkillType.OTHERS],
  },
  status: {
    type: String,
    default: EntityStatus.ACTIVE,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
  },
  // when created by user
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
    default: null,
  },

}, {
  timestamps: true,
});

export default mongoose.model("Skill", skillSchema);


