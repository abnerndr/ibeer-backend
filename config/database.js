const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host || process.env.DB_HOST,
      port: config.port || process.env.DB_PORT,
      database: config.database || process.env.DB_DATABASE,
      user: config.user || process.env.DB_USER,
      password: config.password || process.env.DB_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
});
