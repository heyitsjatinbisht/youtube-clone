import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosInstance.get<T>(this.endpoint, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default APIClient;
