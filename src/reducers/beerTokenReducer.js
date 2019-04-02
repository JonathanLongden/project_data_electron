import {
  ADD_BEER,DELETE_BEER,UPDATE_BEER
} from '../actions/beers';


const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);
const idList = [];

const GenerateNewIdFromIdList = (state) => {
    if (state !== undefined || state.length !== 0) {
      // array empty or does not exist
      state.forEach(function (s) {
        let id = s.id;
        if (!idList.includes(id)){
          idList.push(id);
        }
       
      
      });
    }
    
    let id = generateRandomString(20); 
    while (idList.indexOf(id) > -1) {
      id =  generateRandomString(20);
      
    }
    idList.push(id);
    return id;
}

let initialState = [{id: GenerateNewIdFromIdList([]) , name: 'Bah Humbock', type: 'Dunkler Bock', abv: 6.8, season: "Winter"},
                    {id: GenerateNewIdFromIdList([]) , name: 'Blonde Ale', type: 'Golden Ale/Blond Ale', abv: 4, season: ""},
                    {id: GenerateNewIdFromIdList([]) , name: 'Dirty Girl Dunkel Weizen', type: 'Dunkelweizen', abv: 5.5, season: "Summer"},
                    {id: GenerateNewIdFromIdList([]) , name: 'Dog Slobber Brown Ale', type: 'Brown Ale', abv: 5, season: ""},
                    {id: GenerateNewIdFromIdList([]) , name: 'English Pale Ale', type: 'English Pale Ale', abv: 5, season: "Spring"},
                    {id: GenerateNewIdFromIdList([]) , name: 'Espresso Porter', type: '	Porter', abv: 5.3, season: ""},
                    {id: GenerateNewIdFromIdList([]) , name: 'Fried Dynamite Stout', type: 'Sweet Stout', abv: 5.8, season: "Autumn"}
                  ];



export default function beers(state = [...initialState], action) {
  switch (action.type) {
    case ADD_BEER:
      let obj = action.beer;
      obj.id = GenerateNewIdFromIdList(state)
      return [
        ...state,  obj
       
      ]
    case UPDATE_BEER:
        return state.map((s) => {
        //this allows strings to be compared to Numbers
        if (s.id !== action.beer.id) {
          return s;
        }
        //return action.beer;
        return action.beer;
      });
    case DELETE_BEER:
      let id = action.beer;
      let newState = Object.assign([], state);
      let indexOfBeerToDelete = state.findIndex(beer => {
        return beer.id === id;
      })
      newState.splice(indexOfBeerToDelete, 1);
      return newState;
    default:
      return state;
  }
}

