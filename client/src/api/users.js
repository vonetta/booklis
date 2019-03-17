import axios from 'axios'

export const createUser = async ({ firstName, lastName, email, password, verified }) => {
    try {
        console.log(firstName)
        const response = await axios.post("http://localhost:3001/api/users", {
            firstName, lastName, email, password, verified
        })
        return onSuccess(response)
    }
    catch (err) {
        return onError(err)
    }
}

function onSuccess(response) {
    return response
}

function onError(error) {
    return Promise.reject(error.data)
}