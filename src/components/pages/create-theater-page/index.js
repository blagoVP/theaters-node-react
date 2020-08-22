import React, { useState, useContext } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import TextArea from '../../textarea'
import SubmitBtn from '../../button-submit'
import UserContext from '../../../Context'

const CreateTheater = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")

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

    const handleSubmit = (event) => {
        event.preventDefault()

        const body = {
            title,
            description,
            imageUrl,
            _id: context.user._id
        }

        fetch('http://localhost:9999/api/unit/create-play', {
            method: "POST",
            body: JSON.stringify(body),
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
                <SubmitBtn title="Create" />
            </form>
        </PageLayout >
    )
}


export default CreateTheater