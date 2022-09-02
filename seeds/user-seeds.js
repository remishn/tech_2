const { User } = require('../models');

const userData = [
    {
        username: "Steven",
        email: "steve@gmail.com",
        password: "password"
    },
    {
        username: "rebeccah",
        email: "bech@gmail.com",
        password: "password1"
    },
    {
        username: "alemn",
        email: "alemn@gmail.com",
        password: "password2"
    },
    {
        username: "johnd",
        email: "johnd@gmail.com",
        password: "password4"
    },
    {
        username: "ednas",
        email: "ednas@gmail.com",
        password: "password4"
    }
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;