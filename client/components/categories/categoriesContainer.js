import { connect } from 'react-redux';

import {requestAllCategories} from '../../actions/categories_actions';
import CategoriesIndex from './categoriesIndex';

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  requestAllCategories: () => dispatch(requestAllCategories())
});

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);

export default CategoriesContainer;
