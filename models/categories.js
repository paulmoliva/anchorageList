const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);

const getCategories = (callback, limit) => {
  Category.find(callback).limit(limit);
};

const addCategory = (category, callback) => {
  Category.create(category, callback);
};

const removeCategory = (id, callback) => {
	var query = {_id: id};
	Category.remove(query, callback);
};

module.exports = {
  Category: Category,
  addCategory: addCategory,
  getCategories: getCategories,
  removeCategory: removeCategory
};
