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
    case 'HANDLE_CHANGE':
      console.log(action)
      // const value = action.target.value;
      // const name = target.name;
      // this.setState(prevState => ({
      //   bookEntry: {
      //     ...prevState.bookEntry,
      //     [name]: value
      //   }
      // }));
      break;
  }
  return newState
}

export default reducer