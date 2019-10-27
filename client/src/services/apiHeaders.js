import axios from "axios";

export function apiCallWithHeader(method, path, data, headers) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data, headers)
      .then(res => {
        // console.log(res);
        return resolve(res);
      })
      .catch(error => {
        return reject(error.response);
      });
  });
}
