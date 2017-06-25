const config = {
    user: 'node',
    password: 'node',
    server: 'localhost\\sqlexpress', // You can use 'localhost\\instance' to connect to named instance
    database: 'node',
 
    options: {
        encrypt: false // Use this if you're on Windows Azure 
    }
}

const sql = require('mssql')

module.exports = { sql: sql, config: config }