import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleBook from './SingleBook'
import * as BooksAPI from '../DataProvider/BooksAPI'

/* 
 * SearchPage Component to support search feature.
 */
class SearchPage extends  Component {
    
    state = {
        books:[],
        searchResult:[],
        hasError:false
    }

    /*
     * All the Books (reading, want to read or read) are fetched.
     */ 
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            })
        })
    }

    /*
     * Search books handler.
     */ 
    onSearch = (event) => {
        const srchQry = event.target.value
        if(srchQry) {
            BooksAPI.search(srchQry).then((resultBooks)=>{
                if(!resultBooks || resultBooks.hasOwnProperty('error')){
                    this.setState({searchResult: [], hasError: true })
                } else {
                    this.setState({searchResult: resultBooks, hasError:false})
                    this.mergeStateBookShelfProperty()
                }
            })
        } else {
            this.setState({searchResult: [] })
        }
    }

    /* 
     * Merge the state with current list of the books on Book self.
     */
    mergeStateBookShelfProperty = () => {
        const books= this.state.books
        const searchResult = this.state.searchResult
        if(searchResult.length > 0) {
                books.forEach((book) => {
                    searchResult.forEach((searchResultBook) =>{
                        if(book.id === searchResultBook.id) {
                            searchResultBook.shelf = book.shelf
                        }
                    })
                })
        }
        this.setState({searchResult: searchResult})
    }

    /*
     * Handle for changing the selection of the current book.
     */
    onChangeCurrentBook = (book,shelf) => {
        BooksAPI.update(book,shelf).then(() => {
            book.shelf = shelf
            var updatedBooks = this.state.books.filter((resultBook) =>resultBook.id !== book.id)
            updatedBooks.push(book)
            this.setState({books: updatedBooks})
        })

    }

   render() {
       const searchResult = this.state.searchResult
       const hasError = this.state.hasError
       return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    <input
                         type="text"
                         onChange={this.onSearch}
                         placeholder="Search by title or author"/>
                    </div>
            </div>
            <div className="search-books-results">
                {searchResult.length > 0 && (
                <div>
                    <div>
                        <h3>Search Returned {searchResult.length} books</h3>
                    </div>
                <ol className="books-grid">
                    {searchResult.map((book) =>(
                        <SingleBook
                            key={book.id}
                            book={book}
                            onChangeCurrentBook={this.onChangeCurrentBook}
                        />
                    ))}
                </ol>
                </div>
                )}
                {hasError && (
                    <div>
                        <h3>Search returned zero books. Please try different  key words !</h3>
                    </div>
                )}
            </div>
        </div>
       )
   }
}

export default SearchPage