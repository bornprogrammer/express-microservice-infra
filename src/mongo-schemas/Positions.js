import mongoose from "mongoose";
import EntityStatus from "../../infrastructure/constants/EntityStatus";

const { Schema } = mongoose;

const positionSchema = new Schema({
  title: {
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
  jobDescription: {
    type: String,
    required: true,
  },
  mandatorySkills: {
    type: [Schema.Types.ObjectId],
    ref: "Skill",
    required: true,
  },
  optionalSkills: {
    type: [Schema.Types.ObjectId],
    ref: "Skill",
    required: false,
  },
  status: {
    type: String,
    default: EntityStatus.ACTIVE,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
  },
  screeningQuestions: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "ScreenQuestion",
  },
}, {
  timestamps: true,
});

export default mongoose.model("Position", positionSchema);


