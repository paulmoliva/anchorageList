const express = require('express');
const router = express.Router();
const category = require('../models/categories');

router.get('/', (req, res) => {
  category.getCategories((err, categories) => {
    if(err) {
      throw err;
    }
    res.json(categories);
  });
});

router.post('/', (req, res) => {
  const categoryJSON = req.body;
  category.addCategory(categoryJSON, (err, newCategory) =>{
    if(err){
      throw err;
    }
    res.send(newCategory);
  });
});

router.delete('/:_id', (req, res) => {
  const id = req.params._id;
	category.removeCategory(id, (err, theCategory) => {
		if(err){
			throw err;
		}
		res.json(theCategory);
	});
});

module.exports = router;
