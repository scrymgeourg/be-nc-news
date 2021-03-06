exports.up = function (connection) {
  return connection.schema.createTable("users", (usersTable) => {
    usersTable.text("username").primary().unique();
    usersTable.text("avatar_url");
    usersTable.text("name");
  });
};

exports.down = function (connection) {
  return connection.schema.dropTable("users");
};
