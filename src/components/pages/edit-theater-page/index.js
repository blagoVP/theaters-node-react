import React, { useState, useContext, useEffect } from 'react'
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

    const id = props.match.params.id
    const token = getCookie('x-auth-token')

    useEffect(() => {

        fetch(`http://localhost:9999/api/unit/edit-play/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'authorization': token
            }
          }).then((res) => {
          res.json().then((data) => {
           setTitle(data.title)
           setDescription(data.description)
           setImageUrl(data.imageUrl)
          })
        }).catch((err) =>{
            console.log(err)
            setMessage('Something went wrong')
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

        fetch(`http://localhost:9999/api/unit/edit-play/${id}`, {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                imageUrl
            }),
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            props.history.push('/')
        }).catch(err => {
            setMessage("Something went wrong")
            console.log(err)
        })


    }

    return (
        <PageLayout message={message} >
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
                <SubmitBtn title="Edit" />
            </form>
        </PageLayout >
    )
}


export default CreateTheater