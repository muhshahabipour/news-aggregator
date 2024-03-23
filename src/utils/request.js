import axios from "axios";

const instance = axios.create({
  timeout: 60000,
  headers: {},
});

class Request {
  self = {};

  constructor(baseUrl, headers, axiosInstance) {
    this.self = {
      baseUrl,
      headers,
      instance: axiosInstance || instance,
    };
  }

  post = (endpoint, data, config) => {
    const url = `${this.self.baseUrl}${endpoint}`;
    return this.self.instance({
      url,
      data,
      method: "POST",
      headers: this.self.headers,
      ...config,
    });
  };

  get = (endpoint, params, config) => {
    const url = `${this.self.baseUrl}${endpoint}`;
    return this.self.instance({
      url,
      params,
      method: "GET",
      headers: this.self.headers,
      ...config,
    });
  };

  put = (endpoint, data, config) => {
    const url = `${this.self.baseUrl}${endpoint}`;
    return this.self.instance({
      url,
      data,
      method: "PUT",
      headers: this.self.headers,
      ...config,
    });
  };

  patch = (endpoint, data, config) => {
    const url = `${this.self.baseUrl}${endpoint}`;
    return this.self.instance({
      url,
      data,
      method: "PATCH",
      headers: this.self.headers,
      ...config,
    });
  };

  delete = (endpoint, data, config) => {
    const url = `${this.self.baseUrl}${endpoint}`;
    return this.self.instance({
      url,
      data,
      method: "DELETE",
      headers: this.self.headers,
      ...config,
    });
  };
}

instance.interceptors.request.use(
  (config) => {
    const { url } = config;

    const newConfig = config;
    if (url?.startsWith("/") || url?.startsWith("/") || url?.startsWith("/")) {
      // newConfig.headers.Authorization = `Bearer ${tokens.access_token}`;
      // setRequestConfig({
      //   headers: {
      //     Authorization: `Bearer ${tokens.access_token}`,
      //   },
      // });
    }

    return newConfig;
  },
  (error) => {
    console.log(`error`, error);
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response || !error.config) {
      return Promise.reject({
        errors: error,
        fingerPrint: null,
        message: "Connection Error",
      });
    } else {
      if (error.response.data) {
        const { msg, message } = error.response.data;
        if (message) {
          return Promise.reject({
            status: error.response.status,
            errors: null,
            fingerPrint: null,
            message,
          });
        } else if (msg) {
          return Promise.reject({
            status: error.response.status,
            errors: null,
            fingerPrint: null,
            message: msg,
          });
        } else {
          return Promise.reject({
            status: error.response.status,
            errors: null,
            fingerPrint: null,
            message: error.response.status || "Connection Error",
          });
        }
      } else {
        return Promise.reject({
          status: error.status,
          errors: null,
          fingerPrint: null,
          message: error.response.statusText,
        });
      }
    }
  }
);

export default Request;
