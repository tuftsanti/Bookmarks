import React from 'react'

export default (props) => {
    const [formData, setFormData] = React.useState(props.initial)

    // Gets initial data
    React.useEffect (() => {
        setFormData(props.initial)
    }, [props.initial])

    // changes the data
    const changeData = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    return (
        <>
            <h3>Bookmark Title: </h3>
            <input type='text' name='title' value={formData.title} onChange={changeData}/>
            <h3>Bookmark URL: </h3>
            <input type='text' name='url' value={formData.url} onChange={changeData}/>
            <button onClick={() => {
                props.handleSubmit(formData)
                setFormData(props.initial)
            }}>Submit new bookmark</button>
        </>    
    )
}