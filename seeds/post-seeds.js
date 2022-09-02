const { Post } = require('../models');

const postData = [
    {
        title: "Receipe me website up and running!",
        post_content: "checkout to add and ramdomize receipe ",
        user_id: 3
    },
    {
        title: "Password generator app now available",
        post_content: "you can create strong password with this easy to use app!",
        user_id: 1
    }

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;