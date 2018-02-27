const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./categories').Category;

const subcategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

const Subcategory = mongoose.model('subcategory', subcategorySchema);

module.exports = Subcategory;
