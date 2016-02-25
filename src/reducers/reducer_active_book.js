// state arg isn't app state, but only the state this reducer is responsible for.
// default state to null to address when the app first loads.  at that time it'll be
// undefined which throws error, so make null instead.
export default function(state = null, action) {

  // this is called all the time.  this is why we need to filter out all the actions
  // we don't care about.
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
