import { connect } from 'react-redux';

import {requestAllCategories} from '../../actions/categories_actions';
import { allCategories } from '../../selectors/categoriesSelectors';
import CategoriesIndex from './categoriesIndex';

const mapStateToProps = state => ({
  categories: allCategories(state.categories.byID)
});

const mapDispatchToProps = dispatch => ({
  requestAllCategories: () => dispatch(requestAllCategories())
});

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);

export default CategoriesContainer;
