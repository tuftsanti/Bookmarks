import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import Form from './form.js'
// import Login from './login.js'

const App = (props) => {
    // Hook to hold array of bookmarks
    const [bookmarks, setBookmark] = React.useState(null)
    // Hook to hold edited bookmarks
    const [editThisBookmark, setEditedBookmark] = React.useState({
        title: '',
        url: ''
    }
)

// Store jwt
// REMOVING NOT ADDING AUTH TO BACKEND
// const [token, setToken] = React.useState(null)

// Blank the form
const blankForm = {
    title: '',
    url: ''
}

// GET the bookmarks
const getBookmarks = async () => {
    const response = await fetch('http://localhost:3000/bookmarks') /*, {
        headers: { Authorization: `bearer ${token}` }
    })*/
    const result = await response.json()
    console.log(result)
    setBookmark(result)
}

// Hook to GET API data
// REMOVING NOT ADDING AUTH TO BACKEND
React.useEffect(() => {
    // if (token) {
        getBookmarks()
    // }
}, [])


// Localize storage
// REMOVING NOT ADDING AUTH TO BACKEND
/* React.useEffect(() => {
    const checkToken = JSON.parse(window.localStorage.getItem('token'))
    if (checkToken) {
        setToken(checkToken)
    }
}, [])*/

// Creates Bookmark from form
const createBookmark = async (data) => {
    const response = await fetch('http://localhost:3000/bookmarks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            /* Authorization: `bearer ${token}`*/
        },
        body: JSON.stringify(data)
    })
    getBookmarks()
}

// Deletes a bookmark
const deleteBookmark = async (id) => {
    const response = await fetch(`http://localhost:3000/bookmarks/${id}`, {
        method: 'DELETE' /*,
        headers: {Authorization: `bearer ${token}`}*/
    })
    getBookmarks()
}

// Select bookmark
const selectBookmark = async (bookmark) => {
    setEditedBookmark(bookmark)
}

// Edit a bookmark
const editBookmark = async (data) => {
    const response = await fetch(`http://localhost:3000/bookmarks/${data._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json" /*,
            Authorization: `bearer ${token}` */
        },
        body: JSON.stringify(data)
    })
    getBookmarks()
}

// Login time
// REMOVING NOT ADDING AUTH TO BACKEND
/* const handleLogin = async (data) => {
    const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    const result = await response.json()
    setToken(result)
    window.localStorage.setItem('token', JSON.stringify(result))
}*/

// Logout Time
// REMOVING NOT ADDING AUTH TO BACKEND
/* const handleLogout = () => {
    window.localStorage.removeItem('token')
    setToken(null)
    setBookmark(null)
} */

// Show the bookmarks (finally)
return (
    <div className="app">
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div className="header">
            <h1>Ian's and Andy's Helpful Web Bookmarks</h1>
            <h2>For those too lazy to save bookmarks to your browser</h2>
        </div>
        <div className="add-edit-box">
            <h3 className="add-edit">Add a bookmark to our list</h3>
            <Form initial={blankForm} handleSubmit={createBookmark}/>
        </div>
        <ul>
            {bookmarks ? bookmarks.map((bookmark) => {
                // bookmark.url = `http://`+bookmark.url
                return (
                    <li key={bookmark._id} className="item">
                        <h3>{bookmark.title}</h3>
                        <h3><a  className="link" href={`http://`+bookmark.url} target="_blank">{bookmark.url}</a></h3>
                        <button onClick={() => {
                            selectBookmark(bookmark)
                        }}>Edit this bookmark</button>
                        <button onClick={() => {
                            deleteBookmark(bookmark._id)
                        }}>Delete this bookmark</button>
                    </li>
                )
            }) : `Still Loading the Bookmarks`
            }
        </ul>
        <div className="add-edit-box">
            <h3 className="add-edit">Edit your bookmark</h3>
            <Form initial={editThisBookmark} handleSubmit={editBookmark}/>
        </div>


    </div>
) // : <Login handleSubmit={handleLogin}/>


};
const target = document.getElementById('app')
ReactDOM.render(<App/>, target)