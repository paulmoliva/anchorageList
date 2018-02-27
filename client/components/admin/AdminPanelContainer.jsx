import { connect } from 'react-redux';
import {
  createCategory,
  createSubcategory
} from '../../actions/categories_actions';

import AdminPanel from './AdminPanel';

const mapStateToProps = state => ({
  categories: state.categories,
  subcategories: state.subcategories
});

const mapDispatchToProps = dispatch => ({
  createCategory: category => dispatch(createCategory(category)),
  createSubcategory: subcategory => dispatch(createSubcategory(subcategory))
});

const AdminPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);
