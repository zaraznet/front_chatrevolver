const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({


  env: {
    PROJECT_PREFIX: "revolver",
    API_URL: process.env.API_URL || "https://api.testchatrevolver.space",
    WS_API_URL: process.env.WS_API_URL || "wss://api.testchatrevolver.space",
    SENTRY_DNS: "https://0a63e77ba66fa97b2fe5dc70a1a11db9@o4505754661093376.ingest.sentry.io/4505754673348608",
    YANDEX_METRIKA_COUNTER: "1234567",
  },
});
