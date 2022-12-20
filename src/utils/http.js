import axios from "axios";

const baseURL = "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest";

const headers = {
  "X-RapidAPI-Key": "453332838fmsh06fffcf402c7dbcp14503fjsne4aac469948c",
}

function get() {
  return axios.get(baseURL, { headers})
}

export default { get };
