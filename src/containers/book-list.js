import React, {Component} from 'react';
import { connect } from "react-redux";

//render a list of books
class BookList extends Component{
	renderList(){
		return this.props.books.map( (book) => {  
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//takes application's state as an argument
//the state contains array of books + active book
//will how up as props inisde BookList
function mapStateToProps(state){
	return{
		books: state.books
 	};
}

export default connect(mapStateToProps)(BookList);