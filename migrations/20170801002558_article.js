exports.up = function(knex, Promise) {
  return knex.schema.createTable('article', function (table) {
        table.increments();
        table.string('title').notNullable().unique();
        table.string('description').notNullable();
        table.string('password_digest').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('article');
};
