const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../../models/User');

// Bcrypt to encrypt passwords
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (password.length <= 5) {
    return res.status(400).json({ message: 'Please, make your password at least 6 characters long.' })
  }

  if(!username || !email) {
    return res.status(400).json({ message: 'Please, fill all the fields.' })
  }

  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ message: 'User already exists.' })
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashPass
      })

      newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json(err))
    })

    .catch(err => res.status(500).json(err))

});

router.post('/login', (req, res, next) => {
  // Login implementation
});

router.post('/logout', (req, res, next) => {
  // Logout implementation
});

router.get('/loggedin', (req, res, next) => {
  // Loggedin implementation
});

module.exports = router;
