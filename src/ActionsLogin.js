import * as ACT from "./ACTIONSL";
import firebase from "firebase";
import Axios from "axios";

var firebaseConfig = {
  apiKey: "AIzaSyArqvfKvHtwmi0wcgR75Dk7Hpzy4Ob9U4o",
  authDomain: "hamburger-afe4d.firebaseapp.com",
  databaseURL: "https://hamburger-afe4d.firebaseio.com",
  projectId: "hamburger-afe4d",
  storageBucket: "hamburger-afe4d.appspot.com",
  messagingSenderId: "235822040538",
  appId: "1:235822040538:web:5db98f399d572090736ce3",
  measurementId: "G-57MXB20F63",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export let AUTH = (email, password, data) => async (dispatch) => {
  dispatch({
    type: ACT.START,
  });
  let DataBis = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_KEY}`;
  if (!data) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_KEY}`;
  }
  await Axios.post(url, DataBis)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem("expDate", expDate);
      localStorage.setItem("id", res.data.localId);
      localStorage.setItem("token", res.data.idToken);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("photo", res.data.profilePicture);
      localStorage.setItem("name", res.data.displayName);
      dispatch(Succes(res.data.idToken, res.data.localId));
      dispatch(AuthTimeOut(3600));
    })
    .catch((err) => {
      dispatch(Failed(err));
    });
};

export let Failed = (error) => async (dispatch) => {
  dispatch({
    type: ACT.FAILED,
    payload: {
      data: error,
    },
  });
};
export let AuthTimeOut = (expdate) => async (dispatch) => {
  setTimeout(() => {
    dispatch(Logout());
  }, expdate * 1000);
};

export let CheikAuth = () => async (dispatch) => {
  let photo = localStorage.getItem("photo");
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  dispatch(UpdateProfil(photo, name, email));
  let token = localStorage.getItem("token");

  if (!token) {
    dispatch(Logout());
  } else {
    let expDate = localStorage.getItem("expDate");
    let DateBis = new Date(new Date()).getTime();

    if (expDate < DateBis) {
      dispatch(Logout());
    } else {
      let id = localStorage.getItem("id");
      dispatch(Succes(token, id));
      let d = new Date((expDate - DateBis) / 1000).getTime();
      dispatch(AuthTimeOut(d));
    }
  }
};

export let Logout = () => async (dispatch) => {
  localStorage.removeItem("expDate");
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("photo");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  dispatch({
    type: ACT.LOGOUT,
  });
};

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
firebase.auth().languageCode = "fr_FR";
export let Google = () => async (dispatch) => {
  dispatch({
    type: ACT.START,
  });

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem("expDate", expDate);
      localStorage.setItem("id", res.credential.accessToken);
      localStorage.setItem("token", res.credential.idToken);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("photo", res.user.photoURL);
      localStorage.setItem("name", res.user.displayName);
      dispatch(Succes(res.credential.idToken, res.credential.accessToken));
      dispatch(AuthTimeOut(3600));
    })
    .catch((err) => dispatch(Failed(err)));
};

export let UpdateProfil = (photo, name, email) => async (dispatch) => {
  dispatch({
    type: "UPDATE",
    payload: {
      photo: photo,
      name: name,
      email: email,
    },
  });
};

let providerBis = new firebase.auth.FacebookAuthProvider();

export let Facebook = () => async (dispatch) => {
  dispatch({
    type: ACT.START,
  });
  firebase
    .auth()
    .signInWithPopup(providerBis)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem("expDate", expDate);
      localStorage.setItem("id", res.additionalUserInfo.profile.id);
      localStorage.setItem("token", res.credential.accessToken);
      localStorage.setItem("photo", res.user.photoURL);
      localStorage.setItem("name", res.user.displayName);
      localStorage.setItem("email", res.user.email);
      dispatch(
        Succes(res.additionalUserInfo.profile.id, res.credential.accessToken)
      );
      dispatch(AuthTimeOut(36000));
    })
    .catch((err) => dispatch(Failed(err)));
};

export let Succes = (id, token) => async (dispatch) => {
  dispatch({
    type: ACT.SUCCES,
    payload: {
      id: id,
      token: token,
    },
  });
};
