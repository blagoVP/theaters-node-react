const Service = {

    getPlays() {

        return fetch('http://localhost:9999/api/home/')
            .then(res => res.json())
            .then(plays => plays)
            .catch(err => console.log(err))
    }
}

export default Service