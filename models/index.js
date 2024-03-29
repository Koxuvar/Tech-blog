const User = require('./user');
const BlogPost = require('./blogPost');


User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User,{
    foreignKey:'user_id'
});

module.exports = {User, BlogPost};