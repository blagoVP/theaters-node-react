import React, { useState, useContext } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import TextArea from '../../textarea'
import SubmitBtn from '../../button-submit'
import UserContext from '../../../Context'
import getCookie from '../../../utils/cookie'
import ErrorNotifications from '../../notifications'
import isUrl from '../../../utils/isUrl'

const CreateTheater = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [message, setMessage] = useState(null)

    const context = useContext(UserContext)
    const token = getCookie('x-auth-token')

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

        if (!title || title.length >= 20) {
            setMessage('title is required and must be less than 20 chars')
            return
        }

        if (!description || description.length >= 300){
            setMessage('description is required and must be less than 300 chars')
            return
        }

        if (!imageUrl || !isUrl(imageUrl)){
            setMessage('ImageUrl is required and must be valid URL adress')
            return
        }

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
                'Content-Type': 'application/json',
                'authorization': token
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            props.history.push('/')
        }).catch(err => {
            console.log(err)
            setMessage('Something went wrong!')
        })
    }

    return (
        <PageLayout >
            { message ? <ErrorNotifications message={message} /> : null}
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