// reverse commented/uncommented code to use Sentry

// import * as Sentry from "@sentry/browser";

// function init() {
//   Sentry.init({
//     dsn:
//       "https://30b9de3b086c468b82e598bd886aea54@o375117.ingest.sentry.io/5194112",
//   });
// }

// function log(error) {
//   console.error(error);
//   Sentry.captureException(error);
// }

function init() {}

function log(error) {
  console.error(error);
}

export default {
  init,
  log,
};
