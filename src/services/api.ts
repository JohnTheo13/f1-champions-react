import axios from "axios";

export enum ApiMethod {
  get = "get",
  post = "post",
  put = "put",
  delete = "delete",
}

/**
 * @see https://github.com/axios/axios#handling-errors
 */
const api = {
  send: async (
    method: keyof typeof ApiMethod,
    url: string,
    body = {},
    params = {},
    headers = {}
  ) => {
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const { data } = await axios({
        method,
        url: `${API_URL}/${url}`,
        data: body,
        params: {
          ...params
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          ...headers,
        },
      });
      return data
    } catch (error) {
      throw error;
    }
  },
  get: <T>(url: string, data = {}, params = {}, headers = {}): Promise<T> =>
    api.send(ApiMethod.get, url, data, params, headers),

  post: <T>(url: string, data = {}, params = {}, headers = {}): Promise<T> =>
    api.send(ApiMethod.post, url, data, params, headers),

  put: <T>(url: string, data = {}, params = {}, headers = {}): Promise<T> =>
    api.send(ApiMethod.put, url, data, params, headers),
};

export default api;
