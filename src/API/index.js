import axios from "axios";

const instance = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
