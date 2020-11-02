import config from "../config"
import axios from "axios"

export const searchGeodata = async (search) => {
  return axios.post(
    config.apiEntry + "geodata/search/",
    {
      "search": search
    },
  )
    .catch(function (error) {
      console.log(error);
    });
}

export const addGeodata = async (location) => {
  return axios.post(
    config.apiEntry + "geodata/create/",
    location
  )
    .catch(function (error) {
      console.log(error);
    });
}