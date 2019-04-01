export const ADD_BEER = 'ADD_BEER';
export const DELETE_BEER = 'DELETE_BEER';
export const UPDATE_BEER = 'UPDATE_BEER';

export  function addBeer(beer) {
  return {
    type: ADD_BEER,
    beer: Object.assign({}, beer)
  }
}
//beer: Object.assign({}, beer), {id: nextBeerId++}

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

//https://codereview.stackexchange.com/questions/126574/crud-application-using-react-redux

// export const STANDARDS = {
//   CREATE: 'CREATE_STANDARD',
//   DELETE: 'DELETE_STANDARD',
//   UPDATE: 'UPDATE_STANDARD',
// };

// export const createStandard = (standard) => ({
//   type: STANDARDS.CREATE,
//   standard,
// });

// export const updateStandard = (standard) => ({
//   type: STANDARDS.UPDATE,
//   standard,
// });

// export const deleteStandard = (id) => ({
//   type: STANDARDS.DELETE,
//   id,
// });
