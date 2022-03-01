import Joi from "joi";

const employerValidatonSchema = Joi.object({
  name: Joi.string().trim().min(3).max(255).required(),
  email: Joi.string().trim().email().required(),
  address: Joi.object().keys({
    address: Joi.string().trim().required(),
    pincode: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().required(),
  }).required(),
  companyFoundedIn: Joi.string().trim().min(4).max(4),
  industryType: Joi.string().trim().min(24).max(24),
});

// eslint-disable-next-line import/prefer-default-export
export { employerValidatonSchema };