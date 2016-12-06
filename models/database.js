const pg = require('pg');
const connectionString = process.env.DATABASE_URL ;

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'select * from usuario');
query.on('end', () => { client.end(); });