import axios from "axios";

///manipula el refresco del token luego de expirar 
let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      console.log(localStorage.getItem("refresh_token"));
      try {
        const response = await axios.post(
          "http://localhost:8000/token/refresh/",
          {
            refresh: localStorage.getItem("refresh_token"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          return axios(error.config);
        }
      } catch (refreshError) {
        console.error("Error al actualizar el token:", refreshError);
        // Puedes manejar el error de actualización del token aquí si es necesario
      } finally {
        refresh = false;
      }
    }
    return Promise.reject(error);
  }
);

export default axios;