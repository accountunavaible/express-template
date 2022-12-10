// 默认兜底错误处理
module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: '服务器出错'
    });
  };
};
