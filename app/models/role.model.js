const moongose = require('mongoose');

const Role = moongose.model(
    "Role",
    new moongose.Schema({
        name: String
    })
);

module.exports = Role;