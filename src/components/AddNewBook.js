import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/*
 * Stateless functional component 'AddNewBook'.
 */
const AddNewBook = (props) => {    
    return (
        <div className='open-search'>
               <Link to={{
                   pathname:'/search',
                   state: {
                       booksFromHomepage: props.currentBooks
                       }}}/>
        </div>
    )
}

AddNewBook.PropTypes = {
    currentBooks:PropTypes.array.isRequired
}
export default AddNewBook