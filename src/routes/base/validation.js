const Joi = require('joi');

function validate(user) {
  const schema = Joi.object({
    username: Joi.string(),
  }).messages({
    'string.base': '{#label} should be string',
  });
  return schema.validate(user);
}

const validateBaseRequest = (req, res, next) => {
  const { error } = validate({ username: 1 });
  if (error) next(error);
  else next();
};

module.exports = { validateBaseRequest };
