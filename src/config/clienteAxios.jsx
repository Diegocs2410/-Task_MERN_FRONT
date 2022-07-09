import axios from "axios";

const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL + "/api",
});

export default clienteAxios;
