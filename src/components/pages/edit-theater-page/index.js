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

    // useEffect(()=>{
        //fetch play data on mounting
    //     fetch('http://localhost:9999/api/home/').then((res) => {
    //         res.json().then((data) => {
    //           const plays = data.slice(0, 3)//this should be removed, after api get fixed
    //           setPlays(plays)
    //           console.log(plays)
    //         })
    //       })
    //     }, [])

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
        console.log('Edit Edit :D')
        //validationa if username and password are empty, don't send request

        // await authenticate('http://localhost:9999/api/user/login', {
        //     username,
        //     password
        // }, (user) => {
        //     context.logIn(user)
        //     props.history.push('/')
        // }, (e) => {
        //     console.log('ERROR', e)
        // })
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
                    styleClass=""
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
                    styleClass=""
                />
                <SubmitBtn title="Edit" />
            </form>
        </PageLayout >
    )
}


export default CreateTheater