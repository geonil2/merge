import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://a031b631d40346b89341a08f7840f22a@o4504279755653120.ingest.sentry.io/4504280766152704',
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
