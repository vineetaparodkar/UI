// import axios from "axios";
// import config from "../config/Config";

// const axiosInstance = axios.create({
//   baseURL: config.backendURL,
// });

// axiosInstance.interceptors.response.use((res) => {
//   if (res.data.code !== 200) {
//     console.error(res.data.msg);
//   }
//   return res.data;
// });

// const identity = {
//   addClaim: (params) => axiosInstance.post("/add-claim", params),
//   deleteClaim: (params) => axiosInstance.post("/delete-claim", params),
// };

// export default {
//   identity,
// };
