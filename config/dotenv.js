module.exports = function(env) {
  return {
    clientAllowedKeys: ['MEETUP_OAUTH_KEY'],
    path: `./config/${env}.env`,
    failOnMissingKey: true
  };
};
