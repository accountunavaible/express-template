const { Sequelize } = require('sequelize');
const { MySQL } = require('../../config/default.config');

const seq = new Sequelize({
  dialect: 'mysql',
  host: MySQL.host,
  port: MySQL.port,
  username: MySQL.username,
  password: MySQL.password,
  database: MySQL.database
});

// 测试数据库链接
seq
  .authenticate()
  .then(() => {
    console.log('数据库链接成功');
  })
  .catch(() => {
    console.log('数据库链接失败');
  });

// 同步所有模型模型
// seq.sync({ force: true }).then(() => {
//   console.log('模型全部同步完毕');
// });

module.exports = {
  // 这里导出模型
};
