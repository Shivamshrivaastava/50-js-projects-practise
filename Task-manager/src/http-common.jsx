import axios from "axios";

const baseURL = "http://localhost:5000";

export const useAuthAxios = () => {
  const http = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {},
  });
  return http;
};

export const useDataAxios = () => {
  const http = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });

  http.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
    
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return http({
          method: "post",
          url: "/refreshtoken",
          headers: { Authorization: "" },
          data: {
            refreshToken: localStorage.getItem("refreshToken"),
          },
        }).then((res) => {
          if (res.status === 201) {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            originalRequest.headers.Authorization =
              "Bearer " + localStorage.getItem("accessToken");

            return http(originalRequest);
          }
        });
      }
      if (error.response.status === 404) {
        console.log("error", error);
        return error.response;
      }
    }
  );

  return http;
};
