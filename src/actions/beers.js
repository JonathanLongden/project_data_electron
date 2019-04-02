
//https://codereview.stackexchange.com/questions/126574/crud-application-using-react-redux

export const ADD_BEER = 'ADD_BEER';
export const DELETE_BEER = 'DELETE_BEER';
export const UPDATE_BEER = 'UPDATE_BEER';

export  function addBeer(beer) {
  console.log(beer);
  return {
    type: ADD_BEER,
    beer: Object.assign({}, beer)
  }
}

export function deleteBeer(id) {
  return {
    type: DELETE_BEER,
    beer: id
  }
}

export function updateBeer(beer) {
  console.log(beer);
  return {
    type: UPDATE_BEER,
    beer: beer
  }
}

