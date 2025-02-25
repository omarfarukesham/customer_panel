import Joi from 'joi';

const registrationSchema = Joi.object({
  username: Joi.string().required(),
  personName: Joi.string().optional(),
  password: Joi.string().min(6).required().label('Password'),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
    'any.required': 'Please confirm your password',
  }),
});

export default registrationSchema;
