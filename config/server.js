module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: "http://13.214.190.50",
  port: env.int('PORT', 1340),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
