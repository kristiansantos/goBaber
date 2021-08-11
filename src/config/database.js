module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'docker',
  database: 'goBaber',
  pool: {
    max: 9,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamstamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
