# nodejs_sqlserver Demo Setup
Example code for using NodeJS, Express, and Sequelize to build an API against a SQL Server table. This solution works both as a standalone app (node app.js), and via iisnode on Windows.

### Prerequisites
* IIS
* IIS ASP.NET 4.5
* IIS URL Rewriting module
* Node.JS
* IISNode

### Steps to Use
1. Clone repo to the desired location
2. Pull the require modules
```
npm install
```
3. Update db.js with your database information (database name, username, and password). The db user must have permissions to create objects in the target database.
4. Create an iisnode directory inside the cloned directory, and give "IIS AppPool\DefaultAppPool" (or whatever you App Pool Identity is) read/write access to that directory to get logging info.

