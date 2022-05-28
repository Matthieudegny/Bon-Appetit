
const initialState = {
  pseudo: 'koala',
  messages: [
    { id: 1, text: 'coucou', author: 'koala' },
    { id: 2, text: 'salut', author: 'poule' },
  ],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default Reducer;

