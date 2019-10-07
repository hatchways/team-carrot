import axios from "axios";

export function apiCallWithHeader(method, path, data, headers) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data, headers)
      .then(res => {
        console.log(res.data);
        return resolve(res.data);
      })
      .catch(error => {
        return reject(error.response);
      });
  });
}
