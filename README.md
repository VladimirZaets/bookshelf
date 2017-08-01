# Example of usage bookshelf.js and knex.js with Postgresql

Simple example NodeJS application with Knex.js, Bookshelf.js that connected with Postgresql

## Steps to start
* `npm install`
* install postgresql
* Create DB with command `createdb bookshelf`. Where "bookshelf" is name of DB.
* knexfile.js is configuration file for "knex". You can remove knexfile from this repository and init your "knexfile" with command:
`knex init` in your CLI.
As we use postgresql we need copy configuration from "staging" section to development and change configuration to yours.

As default:
```javascript
development: {
    client: 'postgresql',
    connection: {
      database: 'bookshelf', // Your database name that we declared in third item.
      user:     'vladimirzaets', // As default it's name of your PC account.
      password: '' // As default is empty
    },
    pool: {
      min: 2, // Default settings, for more details looks "knex" documentation.
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
```
* Create migration (table and columns)
  You can use my generated file that located in "migration" folder or remove folder "migration" and generate your migration file with command:
  'knex migrate:article'. Where "article" will be sufix of your generated migration filename.
  After that we should create table and columns. 
  As example: 
  
```javascript
  exports.up = function(knex, Promise) {
     return knex.schema.createTable('article', function (table) { // Use createTable method in schema model to create table in DB.
         table.increments(); // Generate column with auto increment identifiers
         table.string('title').notNullable().unique(); // Create column with name 'title' that should be don't Null and should have unique value
         table.string('description').notNullable();
         table.string('password_digest').notNullable();
         table.timestamps(); // Create column with timestamps
     })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('article'); // Use dropTable method in schema model to remove table in DB
  };
```
* `knex migrate:latest` - to migrate. (Runs up functions in yours migration files) or `knex migrate:roolback` (Runs down functions in yours migration files)
* Run node server with command `node index.js` in root folder

## Results
For look results you should send GET request to you nodejs server and '/api/article' (Full path for this example is "localhost:3030/api/article").
For that you can use chrome extention "Postman" or set this path to browser address panel.
