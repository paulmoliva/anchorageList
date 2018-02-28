const express = require('express');
const router = express.Router();
const Subcategory = require('../models/subcategories');
const Category = require('../models/categories').Category;

router.get('/', (req, res) => {
  Subcategory.find( (err, subcategories) => {
    if (err){
      res.status(500).send({error: 'an error occurred'});
    } else {
      res.json(subcategories);
    }
  });
});

router.post('/', (req, res) => {
  const subCatData = req.body;
  let newSubcat = new Subcategory();
  newSubcat.name = subCatData.name;
  newSubcat.type = subCatData.type;
  newSubcat.category = subCatData.category;
  newSubcat.save()
  .then( () => {
    let parentCategory = Category.find({_id: subCatData.category},
      (err, category) => {
        category.subcategories.push(newSubcat._id);
      });
    res.json(newSubcat);
  });
});

module.exports = router;
