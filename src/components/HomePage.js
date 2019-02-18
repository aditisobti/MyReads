import React, { Component } from 'react'
import * as BooksAPI from '../DataProvider/BooksAPI'
import SingleShelf from './SingleShelf'
import AddNewBook from './AddNewBook'

/*
 * State full component 'HomePage'. This page will display three categories (books I have read, books I want to read, books I am reading).
 */ 
class HomePage extends Component {
    state = {
        books: []
    }

    /*
     * All the Books (reading, want to read or read) are fetched.
     */ 
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            })
        })
    }
    
     /*
     * Handler function for changing book shelf.
     */ 
    onShelfChange = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {            
            book.shelf = newShelf
            var updatedBooks = this.state.books.filter((resultBook) => resultBook.id !== book.id)
            updatedBooks.push(book)
            this.setState({ books: updatedBooks })
        })
    }

    render() {
        const booksBySelf = [
            { type: 'currentlyReading', title: 'Books I am Reading' },
            { type: 'wantToRead', title: 'Books I Want to Read' },
            { type: 'read', title: 'Books I have Read' }
        ];
        return (
            <div className="list-books">
                <div className='list-books-title'>
                    <h1>My Reads</h1>
                </div>
                <div>
                    <div className='list-books-content'>
                        {this.state.books.length > 0 &&
                            <div>
                                {booksBySelf.map((shelfType, index) => {
                                    const booksByShelf = this.state.books.filter((book) =>
                                        book.shelf === shelfType.type
                                    )
                                    return (
                                        <div className="bookshelf" key={index}>
                                            <h2 className="bookshelf-title">{shelfType.title}</h2>
                                            <SingleShelf
                                                key={index}
                                                books={booksByShelf}
                                                onShelfChange={this.onShelfChange}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                    <AddNewBook
                        currentBooks={this.state.books}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage