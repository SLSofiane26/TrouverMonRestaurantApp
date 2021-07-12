import Axios from './AxiosInstance';

export let Info = (data) => async (dispatch) => {
  dispatch({ type: 'INFOSTART' });
  Axios({
    method: 'GET',
    url: '/restaurants/get-info',
    params: {
      locale: 'fr_FR',
      id_restaurant: data,
    },
  })
    .then((res) =>
      dispatch({ type: 'INFOSUCCES', payload: { data: res.data } })
    )
    .catch((err) => dispatch({ type: 'INFOFAILED', payload: { data: err } }));
};

export let BESTCOMM = (data) => async (dispatch) => {
  dispatch({
    type: 'BESTCOMSTART',
  });
  Axios({
    method: 'GET',
    url: '/reviews/list-best',
    params: {
      locale: 'fr_FR',
      id_restaurant: data,
    },
  })
    .then((res) =>
      dispatch({
        type: 'BESTCOMSUCCES',
        payload: {
          data: res.data,
        },
      })
    )
    .catch((err) =>
      dispatch({
        type: 'BESTCOMFAILED',
        payload: {
          data: err,
        },
      })
    );
};

export let Commentaire = (data,dataBis)=>async(dispatch)=>{
  dispatch({type:'COMMENTAIRESTART'})
  Axios({
    method:'GET',
    url:'/reviews/list',
    params:{
      locale:"fr_FR",
      limit:"5",
      page:dataBis,
      food_report:"0",
      sort:"MEAL_DATE_DESC",
      id_restaurant:data,
      }
  }).then(res=> dispatch({type:'COMMENTAIRESUCCES',payload:{data :res.data}}))
  .catch(err=>dispatch({type:'COMMENTAIREFAILED',payload:{data:err}}))
}

export let PhotoCommentaire = (data,dataBis)=> async(dispatch)=>{
  dispatch({type:'PHOTOSTART'})
  Axios({method:'GET',
url:'/food-report/list',
params:{
  count:"110",
  page:dataBis,
  locale:"fr_FR",
  id_restaurant:data,
}}).then(res=>dispatch({type:'PHOTOSUCCES',payload:{data:res.data}})).catch(err=>dispatch({type:'PHOTOFAILED',payload:{data:err}}))
}