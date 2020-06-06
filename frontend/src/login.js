import React from 'react'

export default (props) => {
    const [formData, setFormData] = React.useState({username: '', password: ''})

    const submitLogin = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <>
        <h3>Enter Username: </h3>
        <input type='text' name='username' value={formData.username} onChange={submitLogin}/>
        <h3>Enter Password: </h3>
        <input type='password' name='password' value={formData.password} onChange={submitLogin}/>   
        <button onClick={() => {
            props.handleSubmit(formData)
        }}>Submit Login Info</button>     
        </>
    )
}