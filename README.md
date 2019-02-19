# MyReads App

## Table of Contents

- [Instructions](#Instructions)
- [Important](#Important)

## Instructions
Open Git bash window on your terminal.

Git clone https://github.com/aditisobti/MyReads.git

Go to the folder where the code is downloaded on the terminal.

Install all project dependencies with `npm install`

Start the development server with `npm start`

Go to Chrome or Edge browser with the following URL http://localhost:3000/

You will see the books on three Shelves (I am reading, I have read and I want to read).

You can change the Self of the book by clicking on (down-arrow) button per book to select different options like 'Currently Reading', 'read', 'None', 'Want to read'.

You can also add books by clicking (+) icon on the bottom right corner of the page. That will take you to search page.

From the Search page you can put the book to any Shelf by clicking on clicking on (down-arrow) button per book.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
