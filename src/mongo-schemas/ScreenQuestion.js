import mongoose from "mongoose";
import EntityStatus from "../../infrastructure/constants/EntityStatus";

const { Schema } = mongoose;

const screenQuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: EntityStatus.ACTIVE,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
  },
  isCustom: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});


export default mongoose.model("ScreenQuestion", screenQuestionSchema);
