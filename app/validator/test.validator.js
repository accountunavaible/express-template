const validate = require('../../middleware/validate');
const { body } = require('express-validator');

class TestValidator {
  test = validate([
    body("test.test")
    .notEmpty()
    .withMessage("test.test不能为空")
  ])
}

module.exports = new TestValidator();