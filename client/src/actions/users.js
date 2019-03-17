export const Types = {
    CREATE_USERS_REQUEST: '/users/create_user_request'
}

export const createUserRequest = ({ firstName, lastName, email, password, verified }) => ({
    type: Types.CREATE_USERS_REQUEST,
    payload: { firstName, lastName, email, password, verified }
})