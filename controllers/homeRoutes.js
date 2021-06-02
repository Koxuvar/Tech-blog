const router = require('express').Router();
const withAuth = require('../utils/auth');
const BlogPost = require('../models/BlogPost');

router.get('/', (req, res) =>
{
    res.render('landing');
});

router.get('/blog', withAuth, (req, res) =>
{
    BlogPost.findAll(
    {
        where: 
        {
            user_id: req.session.user_id
        }
    })
    .then((posts) =>
    {
        const po = posts.map((post) => post.get({plain: true}));
        res.render('blog', {
            logged_in: req.session.logged_in,
            po
        });
    });
});

router.get('/post/:id', withAuth, (req,res) =>
{
    BlogPost.findByPk(
    {
        where:
        {
            id: req.params.id
        }
    })
    .then((post) =>
    {
        const po = post.get({plain: true});
        res.render('singlePost', 
        {
            logged_in: req.session.logged_in,
            po
        });
    });
});


module.exports = router;