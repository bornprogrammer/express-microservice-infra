import mongoose from "mongoose";
import EntityStatus from "../../infrastructure/constants/EntityStatus";
import ScreeningQuestionType from "../constants/ScreeningQuestionType";

const { Schema } = mongoose;

const screeningQuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: EntityStatus.ACTIVE,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
  },
  type: {
    type: String,
    enum: [ScreeningQuestionType.SYSTEM_CREATED, ScreeningQuestionType.USER_CREATED],
    default: ScreeningQuestionType.SYSTEM_CREATED,
  },
}, {
  timestamps: true,
});


export default mongoose.model("ScreeningQuestion", screeningQuestionSchema);
