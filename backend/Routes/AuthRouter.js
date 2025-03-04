 const { signup, login } = require('../controllers/AuthControllers');
 const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
 router.post('/signup', signupValidation, signup);
router.post('/login', (req, res) => {
    res.send('Login Route');
});
router.post('/signup', (req, res) => {
    res.send('Signup Route');
});


module.exports = router;