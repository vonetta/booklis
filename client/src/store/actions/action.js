export const submitForm = (bookData, e) => {
    return { type: "SUBMIT_FORM", value: bookData }
}

export const inputChange = (e) => {
    return { type: 'HANDLE_CHANGE', value: e }
}

export const dateChange = (date) => {
    return { type: 'DATE_CHANGE', value: date }
}