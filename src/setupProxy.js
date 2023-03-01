const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/qotd",
    createProxyMiddleware({
      target: "https://favqs.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://everysayingserver.herokuapp.com",
      changeOrigin: true,
    })
  );
};
