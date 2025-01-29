import axios from "axios";
import { API_URL } from "./api_url";

export const fetchQuestions = async (numberQuestion) => {
  try {
    const response = await axios.get(API_URL);

    const data = await response.data;

    const arrayQuestions = await Array.from(data.results);

    return arrayQuestions[numberQuestion];
  } catch (error) {}
};
