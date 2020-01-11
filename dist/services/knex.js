"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knex = require("knex");
require('dotenv').config();
var knex = Knex({
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
exports.default = knex;
//# sourceMappingURL=knex.js.map