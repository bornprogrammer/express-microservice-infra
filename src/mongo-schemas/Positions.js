import mongoose from "mongoose";
import EntityStatus from "../../infrastructure/constants/EntityStatus.js";

const { Schema } = mongoose;

const positionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  domain: {
    type: Schema.Types.ObjectId,
    ref: "Domain",
    required: true,
  },
  positionId: {
    type: String,
    required: false,
  },
  expRange: {
    type: String,
    required: true,
  },
  jobDescription: {
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
    required: true,
  },
  status: {
    type: String,
    default: EntityStatus.ACTIVE,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
  },
  screeningQuestions: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "ScreeningQuestion",
  },
}, {
  timestamps: true,
});


// eslint-disable-next-line func-names
positionSchema.pre("save", function (next) {
  const context = this;
  context.positionId = "idd";
  next();
});

export default mongoose.model("Position", positionSchema);


