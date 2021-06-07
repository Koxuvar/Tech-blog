const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User, BlogPost} = require('../models');

router.get('/', (req, res) =>
{
    BlogPost.findAll(
        {
            include:
            [
                {
                    model: User
                }
            ]
        }
    )
    .then((posts) =>
    {
        const po = posts.map((post) => post.get({plain:true}));
        res.render('landing',
        {po,
        logged_in: req.session.logged_in});
    })
    
});

router.get('/myblog', withAuth, (req, res) =>
{
    BlogPost.findAll(
    {
        where: 
        {
            user_id: req.session.user_id
        },
        include:
        [
            {
                model:User
            }
        ]
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

router.get('/login-register', (req, res) =>
{
    res.render('login-register',
    {logged_in: req.session.logged_in});
});

router.get('/post/:id', withAuth, (req,res) =>
{
    BlogPost.findByPk(
    {
        where:
        {
            id: req.params.id
        },
        include:
        [
            {
                model:User
            }
        ]
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