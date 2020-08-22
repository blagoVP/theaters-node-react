const Compare = {
    compareLikes(a, b) {

        const likesA = a.usersLiked.length;
        const likesB = b.usersLiked.length;

        let comparison = 0;
        if (likesA > likesB) {
            comparison = -1;
        } else if (likesA < likesB) {
            comparison = 1;
        }
        return comparison;
    },

    compareTime(a, b) {

        const timeA = a.createdAt;
        const timeB = b.createdAt;

        let comparison = 0;
        if (timeA > timeB) {
            comparison = -1;
        } else if (timeA < timeB) {
            comparison = 1;
        }
        return comparison;
    }
}

export default Compare