let stateBis = {
  restaurantData: [],
  restaurantDataBis: [],
  villeData: [],
  villeDataBis: [],
  loading: false,
  error: null,
  villeDesc: [],
  villeDescBis: [],
  villeList: [],
  villeListBis: [],
};

let RestaurantReducer = (state = stateBis, action) => {
  switch (action.type) {
    case 'STARTVILLE':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'VILLE':
      return Object.assign({}, state, {
        villeData: action.payload.data.data.geolocation,
        villeDataBis: action.payload.data.data.geolocation,
        loading: false,
        error: null,
      });
    case 'FAILEDVILLE':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'STARTRESTAURANT':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'RESTAURANT':
      return Object.assign({}, state, {
        restaurantData: action.payload.data.data.autocomplete,
        restaurantDataBis: action.payload.data.data.autocomplete,
        loading: false,
      });
    case 'FAILEDRESTAURANT':
      return Object.assign({}, state, {
        villeData: action.payload.data,
        villeDataBis: action.payload.data,
        loading: false,
      });
    case 'BISSTART':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'BISSUCCES':
      let d = []
      d.push(action.payload.data)
      return Object.assign({}, state, {
        villeDescBis: d,
        villeDesc: d,
        loading: false,
      });
    case 'BISFAILED':
      return Object.assign({}, state, {
        error: action.payload.data,
        loading: false,
      });
    case 'VILLESTART':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'VILLESUCCES':
      return Object.assign({}, state, {
        villeList: action.payload.data.data,
        villeListBis: action.payload.data.data,
        loading: false,
      });
    default:
      break;
  }
  return state;
};

export default RestaurantReducer;
