import Axios from "axios";

let AxiosInstance = Axios.create({
  baseURL: "https://thefork.p.rapidapi.com",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "thefork.p.rapidapi.com",
    "x-rapidapi-key": "65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70",
    useQueryString: true,
  },
});

export default AxiosInstance;
