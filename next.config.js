/** @type {import('next').NextConfig} */
const {withSentryConfig} = require("@sentry/nextjs");

const moduleExports = {
  reactStrictMode: false,
  swcMinify: true,
}

const SentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

