module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtTTL: process.env.JWT_TTL || '1d',
  saltRounds: process.env.SALT_ROUND || 10,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
  refreshTokenTTL: process.env.REFRESH_TOKEN_TTL || '2d',
};
