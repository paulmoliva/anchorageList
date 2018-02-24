import React from 'react';

class CategoriesIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllCategories();
  }

  render() {
    let { categories } = this.props;
    const allIDs = Object.keys(categories.byID);
    const categoriesList = allIDs.map( (id, idx) => {
      return <li key={idx}>{categories.byID[id].name}</li>;
    });
    return (
      <ul>
        {categoriesList}
      </ul>
    );
  }
}
export default CategoriesIndex;
