const router = require('express').Router();
const User = require('../../models/User');

router.post('/register', async (req, res) =>
{
    try
    {
        const userCheck = await User.findOne(
            {
                where: 
                {
                    username: req.body.username,
                }
            }
        );

        if(!userCheck)
        {
            const newUser = await User.create(
                {
                    username: req.body.username,
                    password: req.body.password,
                }
            );

            req.session.save(() =>
            {
                req.session.user_id = newUser.id;
                req.session.logged_in = true;

                res.status(200).json(newUser);
            });
        }
        else
        {
            res.status(400).json({message:'user already exists'});
        }
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

router.post('/login', async (req, res) =>
{
    try
    {
        const dbUserData = await User.findOne(
            {
                where:
                {
                    username: req.body.username,
                }
            }
        );

        if(!dbUserData)
        {
            res.status(400).json({message: 'User does not exist'});
            return;
        }

        const validatePassword = await dbUserData.checkPassword(req.body.password);

        if(!validatePassword)
        {
            res.status(400).json({message:'incorrect username or password.'});
            return;
        }

        req.session.save(() =>
        {
            req.session.logged_in = true;
            req.session.user_id = dbUserData.id;
            res.status(200).json({user: dbUserData, message:'User found, logged in succesfully'});
        });
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

router.post('/logout', (req, res) =>
{
    if(req.session.logged_in)
    {
        req.session.destroy(() =>
        {
            res.status(200).json({message: 'User logged out succesfully'}).end();
        });
    }
    else
    {
        res.status(404).json({message:'No user is logged in. Youve found a bug!'}).end();
    }
});

module.exports = router;