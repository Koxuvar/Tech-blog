const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User, BlogPost} = require('../../models');

router.get('/allPosts', async (req, res) =>
{
    try
    {
        const allPosts = await BlogPost.findAll(
            {
                include:[{model: User}]
            }
        );

        if(!allPosts)
        {
            res.status(400).json({message:'There are no posts stored'});
            return;
        }

        res.status(200).json(allPosts);
    }
    catch (err)
    {
        if(err)
        {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/post/:id', async (req, res) =>
{
    try
    {
        const indPost = await BlogPost.findByPk(
            req.params.id,
            {
                include:
                    [{model:User}]
            }
        );
    
        if(!indPost)
        {
            res.status(400).json({message:'post does not exist'});
            return;
        }
    
        res.status(200).json(indPost);
    }
    catch (err)
    {
        if(err)
        {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/create', withAuth, async (req, res) =>
{
    try
    {
        const newPost = await BlogPost.create(
            {
                title: req.body.title,
                content: req.body.content,
                user_id: req.session.user_id,
            }
        );

        res.status(200).json(newPost);
    }
    catch(err)
    {
        if(err)
        {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.put('/update/:id', withAuth, async (req, res) =>
{
    try
    {
        const updatedPost = await BlogPost.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where:
                {
                    id: req.params.id
                }
            }
        );

        if(!updatedPost)
        {
            res.status(400).json({message:'Post Doesnt Exist.'});
            return;
        }

        res.status(200).json({message:'Post updated succesfully'});
    }
    catch(err)
    {
        if(err)
        {
            console.log(err);
            res.json(500).json(err);
        }
    }
});

router.delete('/remove/:id', withAuth, async (req, res) =>
{
    try
    {
        const removedPost = await BlogPost.delete(
            {
                where:
                {
                    id: req.params.id
                }
            }
        );

        if(!removedPost)
        {
            res.status(400).json({message:'post was not deleted'});
            return;
        }

        res.status(200).json({message: 'post deleted'});
    }
    catch(err)
    {
        if(err)
        {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

module.exports = router;