const initialState = {
  bookEntry: {
    bookName: "",
    totalPages: "",
    currentPage: "",
    dateStarted: ""
  },
  bookList: [],
  errors: {},
  edited: false
}

console.log('reducer')

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case 'BOOKS_RECIEVED':
      newState.bookList = action.value
      break;
    case 'SUBMIT_FORM':
      if (newState.edited) {
        console.log('edit api call')
        // editBook(newState.bookEntry);
      } else {
        console.log('create a new book api call', action.value)
        // createNewBook(newState.bookEntry);
      }
      //window.location = "/";
      // const value = action.target.value;
      // const name = target.name;
      // this.setState(prevState => ({
      //   bookEntry: {
      //     ...prevState.bookEntry,
      //     [name]: value
      //   }
      // }));
      break;

    case 'HANDLE_CHANGE':
      // const value = action.value.target.value;
      // const name = action.value.target.name;
      // newState.bookEntry[name] = value
      // return newState
      console.log(action.value)
    case 'DATE_CHANGE':
      console.log(action.value)
      newState.bookEntry.dateStarted = action.value
      return newState
    default:
      return newState
  }

  return newState
}

export default reducer