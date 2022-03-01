import Joi from "joi";

const updateProfile = Joi.object({
  fname: Joi.string().trim().min(3).max(50).regex(/[a-zA-Z][a-zA-Z ]*/).required(),
  lname: Joi.string().trim().min(3).max(50).regex(/[a-zA-Z][a-zA-Z ]*/).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().min(10).max(10).required(),
  address: Joi.object().keys({
    address1: Joi.string().trim().required(),
    address2: Joi.string().trim(),
    pincode: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().required(),
  }).required(),
  userId: Joi.string().trim().min(24).max(24).required(),
});


// eslint-disable-next-line import/prefer-default-export
export { updateProfile };