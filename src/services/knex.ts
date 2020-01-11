import * as Knex from 'knex';
require('dotenv').config()

const knex = Knex({
	client: 'pg',
	connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
		port: 5432,
		ssl: true
	}
});
//console.log(knex);
export default knex;
