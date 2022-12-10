const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const app = express();
require('dotenv').config();

// 跨域
app.use(cors());

// 日志输出
app.use(morgan('tiny'));

// 解析请求体
app.use(express.json());

// 挂载路由
app.use('/api', require('./app/router'));

// 挂载统一处理错误中间件
app.use(errorHandler());

// 导入数据库
require('./app/model');

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器启动成功， http://127.0.0.1:${PORT}`);
});
