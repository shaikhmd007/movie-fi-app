import axios from "axios";

const omdb = axios.create({
  baseURL: "https://www.omdbapi.com/",
  timeout: 15000,
  params: {
    apikey: "f2c67f94",
  },
});

export { omdb };
