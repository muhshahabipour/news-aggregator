import Request from "./request";

class RequestBuilder {
  self = {};

  constructor() {
    this.self = {
      baseUrl: "",
      headers: {},
    };
    this.forBaseUrl();
  }

  forBaseUrl() {
    switch (import.meta.env.NODE_ENVIRONMENT) {
      case "local":
        this.self.baseUrl = "";
        return this;
      case "development":
        // @ts-ignore
        this.self.baseUrl = `${import.meta.env.VITE_BASE_URL}`;
        return this;
      case "production":
        // @ts-ignore
        this.self.baseUrl = `${import.meta.env.VITE_BASE_URL}`;
        return this;
      default:
        return this;
    }
  }

  forNewYorkTimesBaseUrl() {
    this.self.baseUrl = import.meta.env.VITE_NEW_YORK_TIMES_BASE_URL || "";
    return this;
  }

  forNewsApiBaseUrl() {
    this.self.baseUrl = import.meta.env.VITE_NEWS_API_BASE_URL || "";
    return this;
  }

  forGuardianBaseUrl() {
    this.self.baseUrl = import.meta.env.VITE_GUARDIAN_BASE_URL || "";
    return this;
  }

  withHeaders(headers) {
    this.self.headers = { ...this.self.headers, ...headers };
    return this;
  }

  build() {
    return new Request(this.self.baseUrl, this.self.headers);
  }
}

const request = new RequestBuilder();

export default request;
