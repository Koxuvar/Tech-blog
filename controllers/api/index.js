const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const seedAll = require('../../seeds');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.get('/seedthisthingwiththisreallylongurl', (req, res) =>
{
    seedAll();
    res.json({message:'you found it!'});
});

module.exports = router;