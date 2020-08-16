const authenticate = async (url, body, onSucces, onFailure) => {

    try {

        const promise = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = promise.headers.get('Authorization')
        document.cookie = `x-auth-token=${authToken}`

        const response = await promise.json()

        console.log(response)
        if (response.username && authToken) {
            onSucces({
                username: response.username,
                id: response._id
            })
        } else {
            //display massage error from response
            console.log(response.message) 
            onFailure()
        }

    } catch (e) {
        onFailure(e)
    }

}

export default authenticate