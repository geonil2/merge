/** @type {import('next').NextConfig} */
const {withSentryConfig} = require("@sentry/nextjs");

const moduleExports = {
  reactStrictMode: false,
  swcMinify: true,

  sentry: {
    hideSourceMaps: true,
  },
}

const SentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

