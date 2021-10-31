import Axios from "./AxiosInstance";

export let FETCHBIS = (data) => (dispatch) => {
  dispatch({
    type: "BISSTART",
  });
  Axios({
    method: "GET",
    url: "/locations/list",
    params: {
      google_place_id: data,
    },
  })
    .then((res) => dispatch({ type: "BISSUCCES", payload: { data: res.data } }))
    .catch((err) => dispatch({ type: "BISFAILED", payload: { data: err } }));
};

export let FETCHVILLE = (data) => (dispatch) => {
  dispatch({
    type: "STARTVILLE",
  });
  Axios({
    method: "GET",
    url: "/locations/auto-complete",
    params: {
      text: data,
    },
  })
    .then((response) => {
      dispatch({
        type: "VILLE",
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: "FAILEDVILLE",
        payload: {
          data: error,
        },
      });
    });
};

export let FETCHRESTAURANT = (data) => async (dispatch) => {
  dispatch({
    type: "STARTRESTAURANT",
  });
  Axios({
    method: "GET",
    url: "/restaurants/auto-complete",
    params: {
      text: data,
    },
  })
    .then((res) =>
      dispatch({ type: "RESTAURANT", payload: { data: res.data } })
    )
    .catch((err) =>
      dispatch({ type: "FAILEDRESTAURANT", payload: { data: err } })
    );
};

export let FETCHRESTAURANTLISTE = (data, bis) => async (dispatch) => {
  dispatch({ type: "VILLESTART" });
  Axios({
    method: "GET",
    url: "/restaurants/list",
    params: {
      queryPlaceValueCityId: data,
      pageNumber: bis,
    },
  })
    .then((res) => {
      dispatch({ type: "VILLESUCCES", payload: { data: res.data } });
    })
    .catch((err) => console.error(err));
};
