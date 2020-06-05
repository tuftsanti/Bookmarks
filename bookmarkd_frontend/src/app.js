import React from 'react'
import ReactDOM from 'react-dom'
import './css.style.css'
import Form from './form.js'
import Login from './login.js'

const App = (props) => {
    // Hook to hold array of bookmarks
    const [bookmarks, setBookmark] = React.useState(null)
    // Hook to hold edited bookmarks
    const [editBookmark, setEditBookmark] = React.useState({
        title: '',
        url: ''
    }
)

// Store jwt
const [token, setToken] = React.useState(null)

// Blank the form
const blankForm = {
    name: '',
    url: ''
}

// GET the bookmarks
const getBookmark = async () => {
    const response = await fetch('http://localhost:3000/bookmarks', {
        headers: { Authorization: `bearer ${token}` }
    })
    const result = await response.json()
    setBookmark(result)
}

// Hook to GET API data

};
const target = document.getElementById('app')
ReactDOM.render(<App/>, target)