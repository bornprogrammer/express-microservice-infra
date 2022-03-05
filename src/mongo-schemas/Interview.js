import { optional } from "joi";

import mongoose from "mongoose";

import EntityStatus from "../../infrastructure/constants/EntityStatus.js";

import CandidateStatus from "../constants/CandidateStatus.js";

import UtilHelper from "../../infrastructure/helpers/UtilHelper.js";

const { Schema } = mongoose;

const interviewSchema = new Schema({
  position: {
    type: Schema.Types.ObjectId,
    ref: "Position",
    required: true,
  },
  interviewId: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,
  },
  interviewerKey: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,
  },
  candidateDetails: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Candidate",
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
  remarks: {
    type: String,
    required: optional,
  },
  scheduledDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [EntityStatus.ACTIVE, EntityStatus.INACTIVE, EntityStatus.DELETED],
    default: EntityStatus.ACTIVE,
  },
  candidateStatus: {
    type: String,
    enum: [CandidateStatus.REJECTED, CandidateStatus.SCHEDULED, CandidateStatus.SHORTLISTED, CandidateStatus.NOSHOW, CandidateStatus.CANCELLED, CandidateStatus.PENDING],
    default: CandidateStatus.PENDING,
  },
  feedback: {
    type: {
      skillRatings: [{
        skill: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Skill",
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: false,
        },
      }],
      finalRemarks: {
        type: String,
        required: true,
      },
      codeSnippet: String,
      overallRating: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  meetingInviteDetails: {
    type: {
      duration: {
        type: Number,
        required: true,
      },
      interviewee: {
        type: String,
        required: true,
      },
      interviewer: {
        type: [String],
        required: true,
      },
      mailDescription: {
        type: String,
        required: true,
      },
      meetLink: {
        type: String,
        required: true,
      },
    },
  },
}, {
  timestamps: true,
});

// eslint-disable-next-line func-names
interviewSchema.pre("save", function (next) {
  const context = this;
  context.interviewerKey = UtilHelper.generateRandomString(6);
  next();
})

export default mongoose.model("Interview", interviewSchema);
