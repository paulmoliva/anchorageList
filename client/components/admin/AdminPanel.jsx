import React from 'react';

class AdminPanel extends React.Component {
  componentDidMount(){
    this.props.requestAllCategories();
    this.prpos.requestAllSubcategories();
  }
  render(){
    return(
      <form>
      </form>
    );
  }
}

export default AdminPanel;
