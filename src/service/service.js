import config from "../config"
import axios from "axios"
import { message } from "antd"

export const searchGeodata = async (search) => {
  return axios.post(
    config.apiEntry + "geodata/search/",
    {
      "search": search
    },
  )
    .catch(function (error) {
      message.error("An error occurred during search.")
    });
}

export const addGeodata = async (location) => {
  return axios.post(
    config.apiEntry + "geodata/create/",
    location
  )
    .catch(function (error) {
      message.error("An error occurred during inserting data.")
    });
}