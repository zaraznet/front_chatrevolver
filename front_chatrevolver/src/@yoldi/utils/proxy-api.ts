import { createProxyMiddleware } from "http-proxy-middleware";
import { Filter, Options } from "http-proxy-middleware/dist/types";

export const proxyApi = (url: string, context?: Filter | Options) =>
  createProxyMiddleware({
    target: url,
    changeOrigin: true,
    onProxyReq: function (proxyReq, req, res) {
      if ((req as any).body) {
        let bodyData = JSON.stringify((req as any).body);
        // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
        proxyReq.setHeader("Content-Type", "application/json");
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
      }
    },
    ...(context as any),
  });
