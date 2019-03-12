const initialState = {
  bookEntry: {
    bookName: "",
    totalPages: "",
    currentPage: "",
    dateStarted: ""
  },
  errors: {},
  edited: false

}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {

    case 'SUBMIT_FORM':

      if (newState.edited) {
        console.log('edit api call')
        // editBook(newState.bookEntry);
      } else {
        console.log('create a new book api call')
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
      const value = action.value.target.value;
      const name = action.value.target.name;
      newState.bookEntry[name] = value
      return newState
      break;

    case 'DATE_CHANGE':
      newState.bookEntry.dateStarted = action.value
      return newState
      break;

    default:
      return newState
  }
  console.log(newState)
  return newState
}

export default reducer