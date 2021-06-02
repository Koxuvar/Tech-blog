const sequelize = require('../config/connection');
const userSeedData = require('./userSeedData.json');
const blogPostSeedData = require('./blogPostSeedData.json');

const {User, BlogPost} = require('../models');

const seedAll = async () =>
{
    await sequelize.sync({force: true});
    const users = await User.bulkCreate(userSeedData, {individualHooks:true, returning: true});
    const blogPosts = await BlogPost.bulkCreate(blogPostSeedData);

    process.exit(0);
}

seedAll();