let StateB = {
  loading: false,
  RestaurantInfo: '',
  RestaurantInfoBis: '',
  RestaurantMeilleurCom: null,
  RestaurantMeilleurComBis: null,
  RestaurantReport: null,
  RestaurantRepostBis: null,
  RestaurantEvaluation: null,
  RestaurantEvaluationBis: null,
  RestaurantBest: null,
  RestaurantBestBis: null,
  error: null,
  RestaurantCommentaires:null,
  RestaurantCommentairesBis:null,
  RestaurantPhoto : null,
  RestaurantPhotoBis : null
};

let RestaurantReducerBis = (state = StateB, action) => {
  switch (action.type) {
    case 'INFOSTART':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'INFOSUCCES':
      return Object.assign({}, state, {
        RestaurantInfo: action.payload.data,
        RestaurantInfoBis: action.payload.data,
        loading: false,
      });
    case 'INFOFAILED':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'BESTCOMSTART':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'BESTCOMSUCCES':
      return Object.assign({}, state, {  
        loading: false,
        RestaurantBest: action.payload.data.data.collection,
        RestaurantBestBis: action.payload.data.data.collection,
      
      });
    case 'BESTCOMFAILED':
      return Object.assign({}, state, {     
        loading: false,
        error: action.payload.data,
      });

      case 'COMMENTAIRESTART':
      return {
        ...state,
        loading: false,
      }
      case 'COMMENTAIRESUCCES':
      let d = []
      d.push(action.payload.data)
        return{
          ...state,
          RestaurantCommentaires:d,
          RestaurantCommentairesBis:d,
          loading:false
        }
        case 'COMMENTAIREFAILED':
          return{
            ...state,
            loading:false,
            error:action.payload.data
          }
          case 'PHOTOSTART':
            return{
              ...state,
              loading:true
            }
          case 'PHOTOSUCCES':
              return{
                ...state,
                RestaurantPhoto : action.payload.data,
                RestaurantPhotoBis : action.payload.data,
                loading:false
            }
          case 'PHOTOFAILED':
                return{
                  ...state,
                  loading:false,
                  error: action.payload.data
            }
    default:
      break;
  }
  return state;
};

export default RestaurantReducerBis;
