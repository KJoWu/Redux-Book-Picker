import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li  
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {

    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );

  }
}


function mapStateToProps(state) {
  // whatever gets returned from here will be props inside BookList
  return {
    books: state.books
  };
}

// End up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result passed to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
