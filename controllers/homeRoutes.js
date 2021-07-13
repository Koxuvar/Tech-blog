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
        if(posts)
        {
            const po = posts.map((post) => post.get({plain:true}));
            res.render('posts',
            {po,
            logged_in: req.session.logged_in});
        }
        else
        {
            res.render('oops').status(404);
        }
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
        res.render('posts', {
            logged_in: req.session.logged_in,
            po
        });
    });
});

router.get('/login-register', (req, res) =>
{
    res.render('login-register',
    {
        logged_in: req.session.logged_in
    });
});

router.get('/post/:id', (req,res) =>
{
    BlogPost.findByPk(
    req.params.id,
    {
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
        console.log(po);
        res.render('singlePost', 
        {
            logged_in: req.session.logged_in,
            po
        });
    });
});


module.exports = router;