import React, { useState, useContext, useEffect } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import TextArea from '../../textarea'
import SubmitBtn from '../../button-submit'
import UserContext from '../../../Context'

const CreateTheater = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const id = props.match.params.id
    
    useEffect(() => {

        fetch(`http://localhost:9999/api/unit/edit-play/${id}`).then((res) => {
          res.json().then((data) => {
           setTitle(data.title)
           setDescription(data.description)
           setImageUrl(data.imageUrl)
          })
        })
      }, [])

    const context = useContext(UserContext)

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleImageUrl = (event) => {
        setImageUrl(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //validationa if username and password are empty, don't send request

        fetch(`http://localhost:9999/api/unit/edit-play/${id}`, {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                imageUrl
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            props.history.push('/')
        }).catch(err => {
            console.log(err)
        })


    }

    return (
        <PageLayout >
            <form className="theater-form" onSubmit={handleSubmit}>
                <h1>Create Theater</h1>
                <Input
                    label="Theater Title"
                    id="title"
                    value={title}
                    onChange={(e) => handleTitle(e)}
                    type="text"
                />
                <TextArea
                label="Theater Description"
                id="description"
                value={description}
                onChange={(e) => handleDescription(e)}
                />
                <Input
                    label="Image url"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => handleImageUrl(e)}
                    type="text"
                />
                <SubmitBtn title="Edit" />
            </form>
        </PageLayout >
    )
}


export default CreateTheater