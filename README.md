# nodejs_sqlserver Demo Setup
Example code for using NodeJS, Express, and Sequelize to build an API against a SQL Server table. This solution works both as a standalone app (node app.js), and via iisnode on Windows.

### Steps to Use
1. Clone repo to the desired location
2. Pull the require modules
```
npm install
```
3. Update db.js with your database information (database name, username, and password). The db user must have permissions to create objects in the target database.

