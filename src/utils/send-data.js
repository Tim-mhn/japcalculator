import axios from "axios";

export const sendData = (kcal) => () => {
  axios.post(`.netlify/functions/fauna`, { kcal: kcal });
};