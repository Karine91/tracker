'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'tracker',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    // Deny everything by default
    'default-src': "'none'",
    'script-src': ["'self'"],

    // Allow fonts to be loaded from http://fonts.gstatic.com
    'font-src': ["'self'", "http://fonts.gstatic.com"],

    // Allow data (xhr/websocket) from api.mixpanel.com and custom-api.local
    'connect-src': ["'self'", "https://bnr-tracker-api.herokuapp.com"],

    // Allow images from the origin itself (i.e. current domain)
    'img-src': "'self'",

    // Allow CSS loaded from https://fonts.googleapis.com
    'style-src': ["'self'", "https://fonts.googleapis.com"],

    // Omit `media-src` from policy
    // Browser will fallback to default-src for media resources (which is 'none', see above)
    'media-src': null
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV['ember-cli-mirage'] = {
    //   enabled: true
    // }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature

  }

  return ENV;
};
