const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-54-87-179-4.compute-1.amazonaws.com',
      port: '5432',
      database: 'd4caucfkqm8rvl',
      user: 'zttukljgvszbsg',
      password: '37d3f04f5f597ff6075f183193f52bba0f17a4e2458081e1bcbc589cf1765601',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
});
