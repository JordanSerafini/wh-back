const { Client } = require('pg');

// Spécifiez l'URL de connexion à votre base de données PostgreSQL
const connectionString ='postgres://sjordan: @localhost:5432/worldhunter';

// `${process.env.DATABASE_URL}` || 

const client = new Client({
  connectionString: connectionString,
});

client.connect();

export default client;
