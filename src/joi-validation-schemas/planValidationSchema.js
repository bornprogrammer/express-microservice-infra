import Joi from "joi";

const planListSchema = Joi.object({
  productId: Joi.string().alphanum().trim().min(24).max(24).required(),
});



// eslint-disable-next-line import/prefer-default-export
export { planListSchema };