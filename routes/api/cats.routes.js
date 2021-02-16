// * CATS CRUD
const express   = require('express');
const {restart} = require('nodemon');
const Cat       = require('../../models/Cat');
const router    = express.Router();

router.get('/', (req, res) => {
  Cat.find()
  .then(cats => res.status(200).json(cats))
  .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Cat.findOne({id})
  .then(cat => res.status(200).json(cat))
  .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  // const {blueEyes, hair, whitePaw, hasBow, hasBell} = attributes
  const { name, age, race, height, weight, blueEyes, hair, whitePaw, hasBow, hasBell } = req.body;

  if(!name || !age || !race || !height || !weight || !blueEyes || !hair || !whitePaw || !hasBow || !hasBell ) {
    return res.status(400).json({ message: "All fields must be complete"})
  }

  const newCat = new Cat({
    name,
    age,
    race,
    height,
    weight, 
    blueEyes,
    hair,
    whitePaw,
    hasBow,
    hasBell
    // user: req.user
  })

  newCat.save()
  .then(cat => {
    return res.status(200).json(cat)
  })
  .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
const { id } = req.params;

  Cat.findOneAndUpdate({ _id: id }, req.body, { new: true })
  .then(cat => {
    if(!cat) {
      return res.status(404).json({ message: 'Not found' })
    }
    return res.status(200).json(cat);
  })
  .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Cat.findOneAndRemove({ _id: id })
   .then(() => res.status(200).json({ message: `Cat ${id} deleted 🗑`}))
   .catch(err => res.status(500).json(err))
})


module.exports = router;