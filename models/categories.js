const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subcategory = require('./subcategories');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  stories: [{
    type: Schema.Types.ObjectId,
    ref: 'Subcategory'
  }]
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
