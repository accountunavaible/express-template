const crypto = require('crypto');
const { Secret } = require("../config/default.config");

module.exports = encryptStr => {
  return crypto.createHash('md5').update(Secret.password_salt + encryptStr).digest('hex');
};
