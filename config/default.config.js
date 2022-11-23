// 默认配置文件
require('dotenv').config();

module.exports = {
  MySQL: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  Secret: {
    password_salt: process.env.PASSWORD_SALT,
    jwt_secret: process.env.JWT_SECRET
  }
};
