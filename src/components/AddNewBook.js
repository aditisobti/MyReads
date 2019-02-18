import React from 'react'
import { Link } from 'react-router-dom'

/*
 * Stateless functional component 'AddNewBook'.
 */
const AddNewBook = () => {    
    return (
        <div className='open-search'>
               <Link to={{
                   pathname:'/search'}}/>
        </div>
    )
}

export default AddNewBook