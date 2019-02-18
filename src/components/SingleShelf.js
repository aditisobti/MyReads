import React from 'react'
import SingleBook from './SingleBook'
import PropTypes from 'prop-types'

/*
 * 
 * Stateless functional component 'SingleShelf'.
 */
const SingleShelf = (props) => {    
    return (
        <div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { props.books.map( (book) => (
                        <SingleBook
                            book={book}
                            key={book.id}
                            onChangeCurrentBook={props.onShelfChange}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}

SingleShelf.PropTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default SingleShelf