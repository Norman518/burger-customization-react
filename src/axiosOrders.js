import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-fb909.firebaseio.com/"
});

export default instance;
