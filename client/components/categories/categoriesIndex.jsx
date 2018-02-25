import React from 'react';

class CategoriesIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllCategories();
  }

  render() {
    let { categories } = this.props;
    const categoriesList = categories.map( (category, idx) => {
      return <li key={idx}>{category.name}</li>;
    });
    return (
      <ul>
        {categoriesList}
      </ul>
    );
  }
}
export default CategoriesIndex;
